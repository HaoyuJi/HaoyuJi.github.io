# 吉昊宇 · Haoyu Ji

哈尔滨工业大学（深圳）机械工程博士研究生的中英双语学术主页。

## 本地预览

在仓库根目录使用 Node.js 22 或更高版本运行：

```sh
npm run dev
```

在浏览器中打开 http://127.0.0.1:4173 。修改内容后，重新运行 `npm run build` 并刷新浏览器即可。构建只使用 Node.js 标准库。也可以直接打开构建好的 `public/index.html`。

## 维护内容

| 内容 | 文件 |
| --- | --- |
| 双语个人资料、项目、专利、奖项、会议与服务 | `assets/js/profile-data.js` |
| 论文题名、作者、会刊、简介、链接 | `assets/js/papers-data.js` |
| 论文插图、图注和图片来源 | `assets/js/figure-data.js`、`assets/images/research/` |
| 页面结构、首页代表作顺序 | `scripts/build.mjs` |
| 版式、响应式样式 | `assets/styles/site.css` |

每篇论文使用固定的 `id` 生成独立页面及对应英文版。给论文添加图片时，在图注数据中使用同一 `id`。主页和论文正文均在构建时生成，可直接分享、检索，或关闭 JavaScript 阅读。

## GitHub Pages

发布源选择仓库 **Settings → Pages → Build and deployment → GitHub Actions**。推送到 `main` 时，工作流运行 `node scripts/build.mjs`，并将 `public/` 中的静态文件发布至 https://haoyuji.github.io/ 。英文主页位于 `/en/`。
