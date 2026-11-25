import { mkdir, readFile, writeFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { icon } from './icons.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'public');
globalThis.window = {};
for (const name of ['profile-data', 'papers-data', 'figure-data']) {
  await import('../assets/js/' + name + '.js');
}
const { PROFILE_DATA: profile, PAPERS: papers, PAPER_FIGURES: figures } = window;
const siteURL = 'https://haoyuji.github.io/';
const interactionImage = 'assets/images/interaction-sequence.webp';
const selected = ['lady', 'spectral-scalpel', 'lasau', 'relational-graph', 'snippet-transformer', 'physflownet', 'topology-motion'];
const html = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const zh = (lang, cn, en) => lang === 'zh' ? cn : en;
const localized = (data, lang, key) => data[key + (lang === 'zh' ? 'Zh' : 'En')];
const nameOf = lang => profile.name[lang];
const rootDir = lang => lang === 'en' ? 'en/' : '';
const rel = (from, to) => path.posix.relative(path.posix.dirname(from), to) || path.posix.basename(to);
const homePath = lang => rootDir(lang) + 'index.html';
const paperPath = (lang, id) => rootDir(lang) + 'papers/' + id + '/index.html';
const pubOrder = [...papers].sort((a,b) => b.year - a.year);
function otherLanguage(lang) { return lang === 'en' ? 'zh' : 'en'; }
const isProfileAuthor = name => /^(Haoyu Ji|Ji Haoyu|Ji H\.?|H\. Ji)$/i.test(name);
const authorList = p => (Array.isArray(p.authors) ? p.authors : p.authors.split(',')).map(name => name.trim());
function authors(p) {
  return authorList(p).map(name => isProfileAuthor(name) ? '<strong>'+html(name)+'</strong>' : html(name)).join(', ');
}
function authorship(p, lang) {
  const position = authorList(p).findIndex(isProfileAuthor) + 1;
  if (!position) throw new Error('Missing profile author in ' + p.id);
  const cn = ['一', '二', '三', '四'][position - 1] || String(position);
  const en = ['First', 'Second', 'Third', 'Fourth'][position - 1];
  const rank = zh(lang, '第'+cn+'作者', en ? en+' author' : 'Author '+position);
  if (p.role === 'co-first') {
    return zh(lang, '共同第一作者（署名第'+cn+'）', 'Co-first author (listed '+(en ? en.toLowerCase() : '#'+position)+')');
  }
  return p.role === 'corresponding' ? rank + zh(lang, ' · 通讯作者',' · Corresponding author') : rank;
}
function ext(url, label, cls = '', symbol = '') {
  return '<a class="' + cls + '" href="' + html(url) + '" target="_blank" rel="noopener noreferrer">' + (symbol && icon(symbol)) + html(label) + '</a>';
}
function topbar(lang, file, twin, onHome) {
  const home = rel(file, homePath(lang));
  const nav = [['about', '个人简介', 'Profile'], ['publications', '研究论文', 'Publications'], ['record', '学术履历', 'Academic record']];
  return `<header class="topbar"><div class="container nav-inner">
    <a class="brand" href="${home}"><img src="${rel(file, 'assets/images/monogram.svg')}" width="34" height="34" alt="">Haoyu Ji</a>
    <nav aria-label="${zh(lang,'主导航','Main navigation')}" id="main-nav">${nav.map(([id, cn, en]) => `<a href="${onHome ? '' : home}#${id}" ${onHome && id === 'about' ? 'aria-current="location"' : ''}>${zh(lang,cn,en)}</a>`).join('')}</nav>
    <a class="language" data-lang-switch href="${rel(file,twin)}" hreflang="${lang === 'zh' ? 'en' : 'zh-CN'}" aria-label="${zh(lang,'Switch to English','切换为中文')}">${icon('globe')}<span>${zh(lang, 'English', '中文')}</span></a>
    <button class="mobile-menu" aria-controls="main-nav" aria-expanded="false" aria-label="${zh(lang,'导航菜单','Navigation menu')}">${icon('menu')}</button>
  </div></header>`;
}
function hero(lang, file) {
  const affiliation = profile.affiliation[lang];
  const blurb = profile.bio[lang];
  return `<section class="hero" id="about"><div class="container hero-grid">
    <div class="intro"><div class="eyebrow"><span></span>${html(profile.role[lang])}</div>
    <div class="identity"><img class="portrait" width="78" height="92" src="${rel(file,'assets/images/haoyu-ji.webp')}" alt="${nameOf(lang)}"><div><h1>${nameOf(lang)}${lang === 'zh' ? '<i lang="en">Haoyu Ji</i>' : ''}</h1><div class="institution">${icon('cap')}<span>${html(affiliation)}</span></div></div></div>
    <p class="intro-text">${html(blurb)}</p>
    <div class="profile-links">${ext(profile.scholar.replace('hl=en','hl='+ (lang==='zh'?'zh-CN':'en')), 'Google Scholar', 'button primary','cap')}${ext(profile.orcid,'ORCID','button','orcid')}<a class="button" href="mailto:${html(profile.email)}">${icon('mail')}${zh(lang,'电子邮箱','Email')}</a></div></div>
    <figure class="hero-figure"><img src="${rel(file,interactionImage)}" width="1672" height="941" alt="${zh(lang,'研究者与儿童隔桌玩泡泡。上方的骨架序列呈现两人的姿态变化，下方的色带表示不同动作在时间上的起止。','A researcher and child play with bubbles. Skeletal poses above show their changing gestures, and colored bands below indicate when actions begin and end.')}"></figure>
    </div></section>`;
}
function venue(p) {
  const short = p.shortVenue || p.venue;
  return !p.year || short.includes(String(p.year)) ? short : short + ' ' + p.year;
}
function shortSummary(p, lang) {
  const summary = localized(p,lang,'summary') || localized(p,lang,'abstract') || '';
  return summary.match(lang === 'zh' ? /^.*?[。！？]/ : /^.*?[.!?](?=\s|$)/)?.[0] || summary;
}
function paperCard(p,lang,file) {
  const fig = figures[p.id], href = rel(file,paperPath(lang,p.id));
  const concise = shortSummary(p, lang);
  return `<article class="paper-card"><a class="thumb" href="${href}" aria-label="${html(p.title)}" tabindex="-1"><img src="${rel(file,fig.image)}" width="640" height="354" loading="lazy" alt=""></a><div class="card-content">
    <div class="paper-meta"><span class="venue">${html(venue(p))}</span><span class="role">${html(authorship(p,lang))}</span></div>
    <h3 lang="en"><a href="${href}">${html(p.title)}</a></h3><p class="card-summary">${html(concise)}</p>
    <div class="card-links"><a href="${href}">${icon('book')}${zh(lang,'论文详情','Paper details')}</a></div></div></article>`;
}
function publicationList(lang,file) {
  return `<ol class="paper-list">${pubOrder.map(p => {
    const href=rel(file,paperPath(lang,p.id));
    return `<li><a class="list-image" href="${href}" tabindex="-1" aria-label="${html(p.title)}"><img loading="lazy" width="160" height="90" alt="" src="${rel(file,figures[p.id].image)}"></a><div><div class="list-meta"><span class="list-venue">${html(venue(p))}${p.status === 'accepted' ? ' · '+zh(lang,'已接收','Accepted') : ''}</span><span class="role">${html(authorship(p,lang))}</span></div><h3 lang="en"><a href="${href}">${html(p.title)}</a></h3><p class="authors">${authors(p)}</p><p class="list-summary">${html(shortSummary(p,lang))}</p></div></li>`;
  }).join('')}</ol>`;
}
function publications(lang,file) {
  return `<section id="publications" class="pub-section"><div class="container">
    <div class="section-head"><h2>${zh(lang,'研究论文','Publications')}<span class="count">${papers.length}</span></h2><div class="segmented" aria-label="${zh(lang,'论文列表','Publication list')}">
    <a data-view="featured" href="#featured" aria-current="true">${zh(lang,'代表作','Featured')}</a><a data-view="all" href="#all">${zh(lang,'全部论文','All papers')}</a></div></div>
    <div class="cards" id="featured">${selected.map(id => paperCard(papers.find(p => p.id===id),lang,file)).join('')}</div>
    <div id="all">${publicationList(lang,file)}</div></div></section>`;
}
function record(lang) {
  const icons = { projects:'folder', patents:'patent', awards:'award', conferences:'mic', service:'service' };
  return `<section id="record" class="record"><div class="container"><div class="section-head"><h2>${zh(lang,'学术履历','Academic record')}</h2></div><div class="record-list">
  ${['projects','patents','awards','conferences','service'].map(id => {
    const s=profile.sections.find(item => item.id === id);
    return `<details id="${id}" class="record-group"><summary>${icon(icons[id])}<span>${html(s.title[lang])}</span><small>${s.items.length}</small>${icon('plus')}</summary><ul>${s.items.map(i=>`<li><h3>${html(i.title[lang])}</h3>${i.meta[lang] ? '<p class="record-meta">'+html(i.meta[lang])+'</p>' : ''}${i.detail[lang] ? '<p>'+html(i.detail[lang])+'</p>' : ''}</li>`).join('')}</ul></details>`;
  }).join('')}</div></div></section>`;
}
function detail(p,lang,file) {
  const fig=figures[p.id], home=rel(file,homePath(lang));
  const publication = [p.venue, p.volume, p.pages && 'pp. ' + p.pages, p.year].filter(Boolean).join(', ');
  const cite = [p.authors, p.title, publication].join('. ') + '.';
  const resources = new Map();
  if(p.url) resources.set(p.url, zh(lang,'论文原文','Read paper'));
  if(p.doi && !p.url?.includes(p.doi)) resources.set('https://doi.org/' + p.doi.replace(/^https?:\/\/doi.org\//,''),'DOI');
  for(const l of p.links || []) {
    const labels={PDF:'PDF',Code:zh(lang,'代码','Code'),Video:zh(lang,'视频','Video'),Program:zh(lang,'会议日程','Conference program'),Supplement:zh(lang,'补充材料','Supplement'), 'Google Scholar':zh(lang,'按题名检索','Search by title')};
    if(l.url && !resources.has(l.url)) resources.set(l.url, labels[l.label] || l.label);
  }
  function figure(f) {
    const src = rel(file,f.image);
    return `<figure class="detail-figure"><a href="${src}" target="_blank" rel="noopener" aria-label="${zh(lang,'查看大图','Open full-size figure')}"><img src="${src}" alt="${html(localized(f,lang,'caption'))}"></a><figcaption>${html(localized(f,lang,'caption'))}${f.sourceUrl ? ' '+ext(f.sourceUrl,zh(lang,'图片来源','Figure source')):''}</figcaption></figure>`;
  }
  return `<article class="container paper-detail"><p class="breadcrumb"><a href="${home}#all">${zh(lang,'研究论文','Publications')}</a><span>/</span>${html(venue(p))}</p>
    <div class="detail-heading"><div class="paper-meta"><span class="venue">${html(venue(p))}</span><span class="role">${html(authorship(p,lang))}</span></div>
    <h1 lang="en">${html(p.title)}</h1><p class="detail-authors">${authors(p)}</p><p class="detail-venue">${html(p.venue)}${p.status === 'accepted' ? ' · '+zh(lang,'已接收','Accepted'):''}</p>
    <div class="resource-links">${[...resources].map(([url,label],i)=>ext(url,label,i===0?'button primary':'button','link')).join('')}<a class="button" href="#citation">${icon('cite')}${zh(lang,'引用','Cite')}</a></div></div>
    <div class="detail-body"><section><h2>${zh(lang,'研究简介','Research overview')}</h2><p>${html(localized(p,lang,'abstract'))}</p></section>${figure(fig)}</div>
    ${fig.sourceFigure ? '<section class="framework"><h2>'+zh(lang,'方法框架','Method overview')+'</h2>'+figure(fig.sourceFigure)+'</section>' : ''}
    <section class="citation" id="citation"><h2>${zh(lang,'引用','Citation')}</h2><p>${html(cite)} ${p.doi ? ext('https://doi.org/'+p.doi,p.doi) : ''}</p><a class="bib-download" download="${p.id}.bib" href="${rel(file,'papers/'+p.id+'/citation.bib')}">${icon('file')}${zh(lang,'下载 BibTeX','Download BibTeX')}</a></section>
    <a class="back-link" href="${home}#all">${icon('book')}${zh(lang,'全部论文','All publications')}</a></article>`;
}
function page(lang,file,body,p) {
  const twin = p ? paperPath(otherLanguage(lang),p.id) : homePath(otherLanguage(lang));
  const title = p ? p.title + ' | Haoyu Ji' : zh(lang,'吉昊宇 · 学术主页','Haoyu Ji · Academic profile');
  const description = p ? localized(p,lang,'abstract') : profile.bio[lang];
  return `<!doctype html>
<html lang="${lang==='zh'?'zh-CN':'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${html(title)}</title>
<meta name="description" content="${html(description)}"><meta name="theme-color" content="#f3f6f4"><meta property="og:title" content="${html(title)}"><meta property="og:description" content="${html(description)}"><meta property="og:image" content="${siteURL + (p ? figures[p.id].image : interactionImage)}">
<link rel="canonical" href="${siteURL+file.replace(/index\.html$/,'')}"><link rel="alternate" hreflang="${lang==='zh'?'en':'zh-CN'}" href="${siteURL+twin.replace(/index\.html$/,'')}">
<link rel="icon" href="${rel(file,'assets/images/monogram.svg')}"><link rel="stylesheet" href="${rel(file,'assets/styles/site.css')}"><script defer src="${rel(file,'assets/js/site.js')}"></script>
</head><body><a class="skip" href="#main">${zh(lang,'跳到正文','Skip to content')}</a>${topbar(lang,file,twin,!p)}<main id="main">${body}</main>
<footer><div class="container foot"><span>© Haoyu Ji</span><span>${html(profile.affiliation[lang])}</span><a href="#main">${zh(lang,'回到顶部','Back to top')}</a></div></footer></body></html>`;
}
async function save(file, data) {
  const dest = path.join(out,file);
  await mkdir(path.dirname(dest),{recursive:true});
  await writeFile(dest,data);
}
await mkdir(path.join(out,'assets/js'),{recursive:true});
for (const dir of ['styles','images']) await cp(path.join(root,'assets',dir),path.join(out,'assets',dir),{ recursive:true });
await save('assets/js/site.js', await readFile(path.join(root,'assets/js/site.js')));
for (const p of papers) {
  const article = p.venue.startsWith('IEEE Transactions') || p.shortVenue === 'EHRE';
  const volume = p.volume?.match(/^(\d+)(?:\((\d+)\))?$/);
  const fields = {title: '{' + p.title + '}', author: p.authors.split(', ').join(' and '),
    [article ? 'journal' : 'booktitle']: p.venue, year: p.year,
    volume: volume?.[1], number: volume?.[2], pages: p.pages?.replace(/[–—]/g,'--'), doi: p.doi, url: p.url};
  const lines = Object.entries(fields).filter(([,value])=> value).map(([key,value])=>'  '+key+' = {'+value+'}');
  await save('papers/'+p.id+'/citation.bib','@'+(article ? 'article' : 'inproceedings')+'{'+p.id+p.year+',\n'+lines.join(',\n')+'\n}\n');
}
for (const lang of ['zh','en']) {
  const home=homePath(lang);
  await save(home, page(lang,home,hero(lang,home)+publications(lang,home)+record(lang)));
  for(const p of papers) {
    const file = paperPath(lang,p.id);
    await save(file, page(lang,file,detail(p,lang,file),p));
  }
}
await save('.nojekyll','');
console.log('Built both homepages and '+papers.length*2+' paper pages in public/.');
