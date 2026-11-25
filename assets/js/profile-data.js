(() => {
  const bilingual = (zh, en) => ({ zh, en });

  function entry(zhTitle, enTitle, zhMeta, enMeta, zhDetail = "", enDetail = "") {
    return {
      title: bilingual(zhTitle, enTitle),
      meta: bilingual(zhMeta, enMeta),
      detail: bilingual(zhDetail, enDetail)
    };
  }

  function patent(zh, en, number, date, status, type = "invention") {
    const kind = type === "invention"
      ? bilingual("发明专利", "Invention patent")
      : bilingual("实用新型专利", "Utility model");
    const event = status === "granted"
      ? bilingual("授权", "Granted")
      : bilingual("公开", "Application published");
    return entry(zh, en, number, number,
      `${kind.zh} · ${date} ${event.zh}`,
      `${kind.en} · ${event.en} ${date}`);
  }

  const patents = [
    patent("一种基于桌面触控与多模态行为融合的儿童视觉认知能力评估系统、方法、终端及存储介质",
      "System, method, terminal and storage medium for assessing children’s visual cognition using tabletop touch input and multimodal behavioral data",
      "CN122392903B", "2026-10-27", "granted"),
    patent("一种基于注意力的社交认知评估方法、系统及终端",
      "Attention-based method, system and terminal for assessing social cognition",
      "CN119851943A", "2026-04-24", "granted"),
    patent("一种用户协作与互动能力的量化评估方法、系统及终端",
      "Method, system and terminal for quantitatively assessing users’ collaboration and interaction skills",
      "CN121258339A", "2026-04-07", "granted"),
    patent("一种基于多模态数据的用户协作与互动能力评估方法、系统及终端",
      "Method, system and terminal for assessing users’ collaboration and interaction skills using multimodal data",
      "CN121481349A", "2026-02-06", "published"),
    patent("基于相对语义动作分割的孤独症儿童回应能力的自动筛查方法、系统、终端及介质",
      "Method, system, terminal and storage medium for automated screening of responsiveness in children with autism using relative semantic action segmentation",
      "CN120636829A", "2025-11-28", "granted"),
    patent("一种基于动作分割的社交动作完成度评估方法及系统",
      "Method and system for assessing completion of social actions using action segmentation",
      "CN119673458A", "2025-09-26", "granted"),
    patent("一种基于OWC原理的自航式掺气增氧船及其增氧方法",
      "Self-propelled aeration vessel based on the oscillating water column principle and its aeration method",
      "CN113016704A", "2025-03-18", "granted"),
    patent("一种情感认知与表达评估机器人及评估方法",
      "Robot and method for assessing emotional cognition and expression",
      "CN117137485A", "2023-12-01", "published"),
    patent("一种可回收抛载式海洋结构物清洗机器人及清洗方法",
      "Recoverable robot with releasable ballast for cleaning marine structures and its cleaning method",
      "CN114228938B", "2023-08-08", "granted"),
    patent("一种船用离岸式多气室可调节掺氧震荡水箱",
      "Adjustable multi-chamber oscillating tank for offshore vessel-based aeration",
      "CN215684281U", "2022-02-01", "granted", "utility"),
    patent("一种基于OWC原理的自航式掺气增氧船",
      "Self-propelled aeration vessel based on the oscillating water column principle",
      "CN215012747U", "2021-12-07", "granted", "utility")
  ];

  const projects = [
    entry("孤独症诊疗无创脑机接口系统合作研究",
      "Noninvasive brain–computer interfaces for autism diagnosis and treatment",
      "国家重点研发计划 · 2025YFE0218500 · 579 万元 · 在研",
      "National Key R&D Program of China · 2025YFE0218500 · CNY 5.79 million · Ongoing",
      "作为项目组学生成员，参与搭建孤独症评估与干预系统。",
      "I help build the project’s autism assessment and intervention system."),
    entry("面向多元社交场景的孤独症儿童行为分析方法研究",
      "Behavior analysis for children with autism across social settings",
      "国家自然科学基金青年科学基金项目 · 62503139 · 30 万元 · 在研",
      "NSFC Young Scientists Fund · 62503139 · CNY 300,000 · Ongoing",
      "作为学生技术负责人，参与构建自动化行为分割模型。",
      "As the student technical lead, I help develop models for automated behavioral segmentation."),
    entry("基于动作分割的孤独症行为分析方法研究",
      "Action segmentation for behavioral analysis in autism",
      "深圳市科技重大专项 · JCYJ20240813105137049 · 30 万元 · 在研",
      "Shenzhen Science and Technology Program · JCYJ20240813105137049 · CNY 300,000 · Ongoing",
      "作为学生技术负责人，参与实现面向儿童孤独症筛查的行为分割方法。",
      "As the student technical lead, I help implement behavioral segmentation for childhood autism screening."),
    entry("面向家庭环境的孤独症儿童社交能力干预关键技术",
      "Technologies for home-based social skills interventions for children with autism",
      "国家自然科学基金国际合作与交流项目 · 62261160652 · 185 万元 · 已结项",
      "NSFC International Cooperation and Exchange Program · 62261160652 · CNY 1.85 million · Completed",
      "作为主要学生负责人，协调项目实施，搭建数据采集系统并实现自动化评估与分析。",
      "As the student lead, I coordinated the project, built the data acquisition system and implemented automated assessment and analysis."),
    entry("面向孤独症早期诊疗的机器辅助系统关键技术研究",
      "Machine-assisted systems for early autism diagnosis and intervention",
      "国家自然科学基金重点项目 · 61733011 · 278 万元 · 已结项",
      "NSFC Key Program · 61733011 · CNY 2.78 million · Completed",
      "作为学生技术负责人，统筹搭建沉浸式干预系统，使用 Unity 设计游戏任务并搭建数据采集与分析平台。",
      "As the student technical lead, I coordinated development of the immersive intervention system, designed game-based tasks in Unity and built the data acquisition and analysis platform."),
    entry("弱机能状态的认知识别与行为意图理解技术",
      "Recognizing cognitive states and inferring behavioral intent under reduced functional capacity",
      "国家重点研发计划课题 · 2022VFB4703201 · 207 万元 · 已结项",
      "National Key R&D Program of China · 2022VFB4703201 · CNY 2.07 million · Completed",
      "作为项目组学生成员，参与建立行为分析模型并构建综合分析软件。",
      "I contributed to the behavioral analysis models and helped build the integrated analysis software.")
  ];

  function honor(zh, en, year) {
    return entry(zh, en, year, year);
  }
  const awards = [
    honor("优秀学生、优秀团员", "Outstanding Student and Outstanding Youth League Member", "2025–2026"),
    honor("中国科协青年科技人才培育工程博士生专项计划、比亚迪奖学金、优秀团员",
      "CAST doctoral program for young researchers, BYD Scholarship and Outstanding Youth League Member", "2024–2025"),
    honor("国家奖学金、研究生特等奖学金、优秀学生、优秀团员",
      "National Scholarship, Special Graduate Scholarship, Outstanding Student and Outstanding Youth League Member", "2023–2024"),
    honor("研究生特等奖学金、优秀学生", "Special Graduate Scholarship and Outstanding Student", "2022–2023"),
    honor("中国海洋大学荣誉学士、山东省优秀毕业生、校优秀毕业生",
      "Honors Bachelor’s Degree from Ocean University of China, Outstanding Graduate of Shandong Province and University Outstanding Graduate", "2021–2022"),
    honor("国家奖学金、综合类一等奖学金、优秀学生",
      "National Scholarship, First-Class Comprehensive Scholarship and Outstanding Student", "2020–2021"),
    honor("国家奖学金、综合类一等奖学金、优秀学生",
      "National Scholarship, First-Class Comprehensive Scholarship and Outstanding Student", "2019–2020"),
    honor("青岛双瑞奖学金、学习优秀一等奖学金、科技创新奖学金",
      "Qingdao SunRui Scholarship, First-Class Academic Excellence Scholarship and Science and Technology Innovation Scholarship", "2018–2019"),
    entry("第十二届“挑战杯”中国大学生创业计划竞赛", "12th Challenge Cup China College Students’ Entrepreneurship Competition",
      "国家级银奖、省级金奖", "National silver medal and provincial gold medal"),
    entry("第十三届“挑战杯”中国大学生创业计划竞赛", "13th Challenge Cup China College Students’ Entrepreneurship Competition",
      "省级铜奖", "Provincial bronze medal"),
    entry("第十届全国海洋航行器设计与制作大赛（A2 类）", "10th National Marine Vehicle Design and Construction Competition, category A2",
      "国家级二等奖、省级二等奖", "National second prize and provincial second prize"),
    entry("第十届全国海洋航行器设计与制作大赛（B2 类）", "10th National Marine Vehicle Design and Construction Competition, category B2",
      "国家级二等奖、省级二等奖", "National second prize and provincial second prize"),
    entry("第十六届全国环境友好科技竞赛", "16th National Environmentally Friendly Science and Technology Competition",
      "国家级三等奖、华北赛区一等奖", "National third prize and North China regional first prize")
  ];

  const iciraSession = "Pattern Analysis and Machine Intelligence: Vision, Language, Multimodal Learning, and Applications";

  const conferences = [
    entry("欧洲计算机视觉会议（ECCV）", "European Conference on Computer Vision (ECCV)",
      "2026 · 瑞典马尔默 · 海报报告", "2026 · Malmö, Sweden · Poster",
      "PhysFlowNet: Learning Canonical Latent Manifolds via Spatio-Spectral Physics Priors for Underwater Object Detection",
      "PhysFlowNet: Learning Canonical Latent Manifolds via Spatio-Spectral Physics Priors for Underwater Object Detection"),
    entry("中国自动化大会暨中国自动化学会成立 65 周年", "Chinese Automation Congress and the 65th Anniversary of the Chinese Association of Automation",
      "2026 · 中国北京 · 参会", "2026 · Beijing, China · Attendee"),
    entry("国际智能机器人与应用会议（ICIRA）", "International Conference on Intelligent Robotics and Applications (ICIRA)",
      "2025 · 日本冈山 · 分会主席", "2025 · Okayama, Japan · Session chair",
      "主持第 14 专题分会“模式分析与机器智能：视觉、语言、多模态学习及其应用”。",
      "Chaired Special Session 14, “" + iciraSession + ".”"),
    entry("第三届中国图象图形学学会情感智能大会", "3rd Conference on Affective Intelligence of the China Society of Image and Graphics",
      "2025 · 中国深圳 · 参会", "2025 · Shenzhen, China · Attendee"),
    entry("欧洲计算机视觉会议（ECCV）", "European Conference on Computer Vision (ECCV)",
      "2024 · 意大利米兰 · 海报报告", "2024 · Milan, Italy · Poster",
      "Language-Assisted Skeleton Action Understanding for Skeleton-Based Temporal Action Segmentation",
      "Language-Assisted Skeleton Action Understanding for Skeleton-Based Temporal Action Segmentation"),
    entry("第五届机器人学术年会", "5th Annual Academic Conference on Robotics",
      "2024 · 中国西安 · 参会", "2024 · Xi’an, China · Attendee"),
    entry("国际机器学习与控制论会议（ICMLC）", "International Conference on Machine Learning and Cybernetics (ICMLC)",
      "2023 · 澳大利亚阿德莱德 · 口头报告", "2023 · Adelaide, Australia · Oral presentation",
      "A Humanoid Robot to Assess the Affective Imitative Expression Abilities of Children with Autism Spectrum Disorder",
      "A Humanoid Robot to Assess the Affective Imitative Expression Abilities of Children with Autism Spectrum Disorder")
  ];

  const reviewVenues = "IEEE Transactions on Multimedia, ACM Multimedia, Informatics and Health, IEEE/CAA Journal of Automatica Sinica, Computer Vision and Image Understanding, Displays";
  const service = [
    entry("分会主席", "Session chair", "ICIRA 2025 · 第 14 专题分会", "ICIRA 2025 · Special Session 14",
      "模式分析与机器智能：视觉、语言、多模态学习及其应用", iciraSession),
    entry("期刊与会议审稿", "Journal and conference reviewer", "", "", reviewVenues, reviewVenues),
    entry("学会会员", "Professional memberships", "", "",
      "IEEE 学生会员、中国自动化学会会员", "Student member of IEEE and member of the Chinese Association of Automation")
  ];

  window.PROFILE_DATA = {
    name: bilingual("吉昊宇", "Haoyu Ji"),
    role: bilingual("机械工程博士研究生", "PhD Student in Mechanical Engineering"),
    affiliation: bilingual("哈尔滨工业大学（深圳）", "Harbin Institute of Technology, Shenzhen"),
    bio: bilingual(
      "我师从刘洪海教授（欧洲科学院院士、IEEE Fellow），研究领域为计算机视觉、人体行为分析与时序动作分割。目前主要结合视觉信息、骨架运动与多模态信号，在连续序列中识别动作、定位各段动作的起止边界。我也关注视觉感知与行为理解中的其他问题，并将这些方法用于人机交互和孤独症儿童的行为评估。2025 年入选中国科协青年科技人才培育工程博士生专项计划。",
      "My doctoral advisor is Professor Honghai Liu, a member of Academia Europaea and an IEEE Fellow. My research spans computer vision, human behavior analysis and temporal action segmentation. I use visual information, skeletal motion and multimodal signals to recognize actions in continuous sequences and identify where each action begins and ends. I also study broader questions in visual perception and behavior understanding, with applications in human–computer interaction and behavioral assessment in children with autism. In 2025, I was selected for the China Association for Science and Technology’s doctoral training program for young researchers."
    ),
    interests: bilingual(
      ["计算机视觉", "人体行为分析", "时序动作分割"],
      ["Computer vision", "Human behavior analysis", "Temporal action segmentation"]
    ),
    email: "Jihaoyu1224@gmail.com",
    orcid: "https://orcid.org/0009-0007-2150-0791",
    scholar: "https://scholar.google.com/citations?user=xAVM-egAAAAJ&hl=en&view_op=list_works&sortby=pubdate",
    sections: [
      { id: "patents", title: bilingual("专利", "Patents"), items: patents },
      { id: "projects", title: bilingual("科研项目", "Research projects"), items: projects },
      { id: "awards", title: bilingual("奖项与荣誉", "Awards and honors"), items: awards },
      { id: "conferences", title: bilingual("会议与报告", "Conferences and talks"), items: conferences },
      { id: "service", title: bilingual("学术服务", "Academic service"), items: service }
    ]
  };
})();
