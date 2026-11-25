// Conference entries use the meeting year.
window.PAPERS = [
  {
    id: "lady",
    title: "LaDy: Lagrangian-Dynamic Informed Network for Skeleton-based Action Segmentation via Spatial-Temporal Modulation",
    authors: "Haoyu Ji, Xueting Liu, Yu Gao, Wenze Huang, Zhihao Yang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition", shortVenue: "CVPR",
    year: 2026, pages: "34449–34459", role: "first", status: "published", doi: "",
    url: "https://openaccess.thecvf.com/content/CVPR2026/html/Ji_LaDy_Lagrangian-Dynamic_Informed_Network_for_Skeleton-based_Action_Segmentation_via_Spatial-Temporal_CVPR_2026_paper.html",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2603.24097" },
      { label: "Code", url: "https://github.com/HaoyuJi/LaDy" },
      { label: "Supplement", url: "https://openaccess.thecvf.com/content/CVPR2026/supplemental/Ji_LaDy_Lagrangian-Dynamic_Informed_CVPR_2026_supplemental.pdf" }
    ],
    abstractZh: "外形相似的动作可能由不同的力驱动。LaDy 从骨架关节轨迹估计广义力，用功与动能变化之间的关系约束估计过程。模型把这些动力学线索融入关节特征，并利用受力变化定位连续动作之间的边界。",
    abstractEn: "Two movements can trace similar paths while differing in the forces that drive them. LaDy estimates generalized forces from joint trajectories and constrains the estimates using the work–energy relationship. These dynamics help the model distinguish poses in space and locate transitions in time."
  },
  {
    id: "spectral-scalpel",
    title: "Spectral Scalpel: Amplifying Adjacent Action Discrepancy via Frequency-Selective Filtering for Skeleton-Based Action Segmentation",
    authors: "Haoyu Ji, Bowen Chen, Zhihao Yang, Wenze Huang, Yu Gao, Xueting Liu, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition", shortVenue: "CVPR",
    year: 2026, pages: "12849–12859", role: "first", status: "published", doi: "",
    url: "https://openaccess.thecvf.com/content/CVPR2026/html/Ji_Spectral_Scalpel_Amplifying_Adjacent_Action_Discrepancy_via_Frequency-Selective_Filtering_for_CVPR_2026_paper.html",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2603.24134" },
      { label: "Code", url: "https://github.com/HaoyuJi/SpecScalpel" },
      { label: "Video", url: "https://www.youtube.com/watch?v=2WCINO7EGsE" }
    ],
    abstractZh: "相邻动作常包含相似的节律，导致模型难以判断动作切换的时刻。Spectral Scalpel 用多尺度滤波器减弱共有的频率成分，突出区分动作的频率线索，再通过相邻动作间的差异损失训练分割模型。研究在五个公开数据集上检验了这一方法。",
    abstractEn: "Adjacent actions often share a rhythm that makes the transition between them hard to locate. Spectral Scalpel learns filters that attenuate shared frequencies and emphasize frequencies distinctive to each action. A loss on neighboring segments trains the filters to sharpen these boundaries. The study evaluates the approach on five public datasets."
  },
  {
    id: "relational-graph",
    title: "Text-Derived Relational Graph-Enhanced Network for Skeleton-Based Action Segmentation",
    authors: "Haoyu Ji, Bowen Chen, Weihong Ren, Wenze Huang, Zhihao Yang, Zhiyong Wang, Honghai Liu",
    venue: "IEEE Transactions on Image Processing", shortVenue: "IEEE TIP",
    year: 2025, volume: "34", pages: "7305–7320", role: "first", status: "published", doi: "10.1109/TIP.2025.3624581",
    url: "https://doi.org/10.1109/TIP.2025.3624581",
    links: [{ label: "PDF", url: "https://arxiv.org/pdf/2503.15126" }, { label: "Code", url: "https://github.com/HaoyuJi/TRG-Net" }],
    abstractZh: "哪些关节会协同运动，哪些动作在语义上相近？TRG-Net 借助大语言模型构建关节关系图和动作关系图。前者随帧和通道调整关节间的信息传递，后者为逐帧分类提供类别关系监督。研究在四个骨架动作数据集上进行了评估。",
    abstractEn: "TRG-Net uses a language model to build two graphs: one describes relationships between joints, the other between actions. The joint graph adapts how features are combined across space and time. The action graph supplies supervision about the relative similarity of action classes. The evaluation covers four public datasets."
  },
  {
    id: "snippet-transformer",
    title: "Snippet-Aware Transformer With Multiple Action Elements for Skeleton-Based Action Segmentation",
    authors: "Haoyu Ji, Bowen Chen, Wenze Huang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "IEEE Transactions on Neural Networks and Learning Systems", shortVenue: "IEEE TNNLS",
    year: 2025, volume: "36(9)", pages: "17462–17476", role: "first", status: "published", doi: "10.1109/TNNLS.2025.3563025",
    url: "https://doi.org/10.1109/TNNLS.2025.3563025",
    links: [{ label: "Code", url: "https://github.com/HaoyuJi/ME-ST" }, { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/40327485/" }],
    abstractZh: "动作的识别线索往往集中在特定身体部位和短暂的子动作上。ME-ST 分别沿关节与时间维度分配注意力，在多种时间尺度上提取动作片段，帮助模型从连续骨架序列中区分不同动作。",
    abstractEn: "A movement can be identified by a few joints or a brief sub-action within a longer sequence. ME-ST directs attention across joints and across time to recover these cues at different scales, then uses them to segment continuous skeletal motion."
  },
  {
    id: "lasau",
    title: "Language-Assisted Skeleton Action Understanding for Skeleton-Based Temporal Action Segmentation",
    authors: "Haoyu Ji, Bowen Chen, Xinglong Xu, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "European Conference on Computer Vision", shortVenue: "ECCV",
    year: 2024, pages: "400–417", role: "first", status: "published", doi: "10.1007/978-3-031-72949-2_23",
    url: "https://doi.org/10.1007/978-3-031-72949-2_23",
    links: [{ label: "PDF", url: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/07145.pdf" }, { label: "Code", url: "https://github.com/HaoyuJi/LaSA" }, { label: "Video", url: "https://www.youtube.com/watch?v=502arbZa7bM" }],
    abstractZh: "LaSA 将关节和动作的文字描述引入骨架时序分割。关节文本帮助模型学习不同身体部位之间的联系，动作文本则为类别之间的语义关系提供监督，由此改善长序列中的逐帧识别。",
    abstractEn: "LaSA brings descriptions of joints and actions into skeleton-based segmentation. Text about joints guides attention between body parts, while descriptions of actions teach the model how categories relate. Both sources of information support frame-level recognition in long motion sequences."
  },
  {
    id: "physflownet",
    title: "PhysFlowNet: Learning Canonical Latent Manifolds via Spatio-Spectral Physics Priors for Underwater Object Detection",
    authors: "Xueting Liu, Haoyu Ji, Wenze Huang, Zhihao Yang, Yu Gao, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "European Conference on Computer Vision", shortVenue: "ECCV",
    year: 2026, pages: "613–631", role: "co-first", status: "published", doi: "10.1007/978-3-032-37038-9_35",
    url: "https://doi.org/10.1007/978-3-032-37038-9_35",
    abstractZh: "水下成像退化会改变目标的外观，使检测模型难以辨认轮廓与纹理。PhysFlowNet 将空间与频谱中的物理先验引入特征学习，在降采样时保留细节，并通过对比学习与不确定性约束训练检测器。",
    abstractEn: "Underwater imaging conditions can distort an object's texture and outline. PhysFlowNet uses physical priors in the spatial and spectral domains to learn a common feature space. Its downsampling method preserves fine structure, while its training objective aligns representations and calibrates uncertainty."
  },
  {
    id: "topology-motion",
    title: "Topology-Motion Decoupling Framework With Textual Regularization for Skeleton-Based Temporal Action Segmentation",
    authors: "Zhihao Yang, Haoyu Ji, Bowen Chen, Wenze Huang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology", shortVenue: "IEEE TCSVT",
    year: 2026, volume: "36(5)", pages: "7236–7249", role: "co-first", status: "published", doi: "10.1109/TCSVT.2025.3637737",
    url: "https://doi.org/10.1109/TCSVT.2025.3637737",
    abstractZh: "该框架分别建模人体骨架的拓扑结构和关节运动轨迹，再借助文本语义约束学习到的动作特征，用于长时骨架序列中的细粒度动作分割。",
    abstractEn: "This framework separates the structure of the skeleton from the motion of its joints. Textual regularization guides the learned features as the model identifies and segments fine-grained actions in long skeleton sequences."
  },
  {
    id: "affective-imitation",
    title: "A Humanoid Robot to Assess the Affective Imitative Expression Abilities of Children with Autism Spectrum Disorder",
    authors: "Haoyu Ji, Bowen Chen, Zhiyong Wang, Hanwei Ma, Ruihan Lin, Yixuan Sheng, Honghai Liu",
    venue: "International Conference on Machine Learning and Cybernetics", shortVenue: "ICMLC",
    year: 2023, pages: "352–357", role: "first", status: "published", doi: "10.1109/ICMLC58545.2023.10327992",
    url: "https://doi.org/10.1109/ICMLC58545.2023.10327992",
    abstractZh: "研究使用人形机器人开展情感表情模仿任务，考察孤独症谱系障碍儿童模仿情绪表达的能力，将人机交互引入儿童行为评估。",
    abstractEn: "A humanoid robot serves as an interaction partner in an emotion-imitation task. The study examines how children on the autism spectrum imitate affective expressions in this structured interaction."
  },
  {
    id: "dofa",
    title: "DoFA: Multi-Receptive Field Context Extraction via Dual-Phase Feature Aggregation Network for Underwater Object Detection",
    authors: "Xueting Liu, Haoyu Ji, Wenze Huang, Zhihao Yang, Yu Gao, Jinbin Guo, Ziyang Tang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "International Conference on Intelligent Robotics and Applications", shortVenue: "ICIRA",
    year: 2026, role: "corresponding", status: "accepted", doi: "", url: "",
    links: [{ label: "Program", url: "https://r2.overlink.top/icira2026/ICIRA-2026-eBOOK.pdf#page=9" }],
    abstractZh: "DoFA 面向水下目标检测，从不同感受野提取上下文，再通过两个阶段聚合特征，以同时利用目标局部和周围场景的信息。",
    abstractEn: "DoFA extracts context over multiple receptive fields for underwater detection. Two stages of feature aggregation bring together information about an object and its surroundings."
  },
  {
    id: "ancnet",
    title: "ANCNet: Anti-Aliasing Neuromorphic Cleaning Network for Underwater Object Detection",
    authors: "Xueting Liu, Haoyu Ji, Ziyang Tang, Jinbin Guo, Yu Gao, Zhihao Yang, Wenze Huang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "International Conference on Intelligent Robotics and Applications", shortVenue: "ICIRA",
    year: 2026, role: "corresponding", status: "accepted", doi: "", url: "",
    links: [{ label: "Program", url: "https://r2.overlink.top/icira2026/ICIRA-2026-eBOOK.pdf#page=9" }],
    abstractZh: "ANCNet 探索如何将抗混叠处理与神经形态特征净化结合，用于从复杂水下图像中检测目标。",
    abstractEn: "ANCNet investigates anti-aliasing and neuromorphic feature cleaning for object detection in underwater imagery."
  },
  {
    id: "hkafer",
    title: "HKAFER: Achieve Visual Parameter-Efficient Fine-Tuning via Heterogeneous Kronecker Adaptation for Facial Expression Recognition",
    authors: "Yu Gao, Haoyu Ji, Zhiyong Wang, Wenze Huang, Qian Dong, Zhihao Yang, Xueting Liu, Weihong Ren, Honghai Liu",
    venue: "AAAI Conference on Artificial Intelligence", shortVenue: "AAAI",
    year: 2026, volume: "40(6)", pages: "4203–4211", role: "coauthor", status: "published", doi: "10.1609/aaai.v40i6.42416",
    url: "https://doi.org/10.1609/aaai.v40i6.42416",
    links: [{ label: "PDF", url: "https://ojs.aaai.org/index.php/AAAI/article/download/42416/46377" }],
    abstractZh: "真实场景中的遮挡与姿态变化会影响表情识别。HKAFER 使用异构克罗内克适配方法，以较少的可训练参数微调视觉编码器，提取与面部表情相关的特征。",
    abstractEn: "Occlusion and head pose can obscure the facial regions that convey an expression. HKAFER uses heterogeneous Kronecker adaptation to tune a small set of visual-encoder parameters for expression recognition."
  },
  {
    id: "supervised-contrastive",
    title: "Exploring Supervised Contrastive Learning for Skeleton-Based Temporal Action Segmentation",
    authors: "Bowen Chen, Haoyu Ji, Hanwei Ma, Ruihan Lin, Wei Nie, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "IEEE Transactions on Cognitive and Developmental Systems", shortVenue: "IEEE TCDS",
    year: 2025, volume: "17(4)", pages: "964–975", role: "coauthor", status: "published", doi: "10.1109/TCDS.2025.3532694",
    url: "https://doi.org/10.1109/TCDS.2025.3532694",
    abstractZh: "该研究探讨如何在骨架动作分割中使用有监督对比学习。动作标签约束特征之间的距离，使同类动作的表示更接近，并帮助模型区分不同动作。",
    abstractEn: "The study examines supervised contrastive learning for segmentation of skeletal motion. Action labels shape distances between features, bringing examples of the same action together and separating distinct classes."
  },
  {
    id: "multiscale-segmentation",
    title: "Multiscale Skeleton-Based Temporal Action Segmentation Using Hierarchical Temporal Modeling and Prediction Ensemble",
    authors: "Bowen Chen, Wei Nie, Haoyu Ji, Weihong Ren, Qiyi Tong, Zhiyong Wang, Honghai Liu",
    venue: "IEEE Transactions on Cybernetics", shortVenue: "IEEE TCYB",
    year: 2025, volume: "55(6)", pages: "2779–2791", role: "coauthor", status: "published", doi: "10.1109/TCYB.2025.3559660",
    url: "https://doi.org/10.1109/TCYB.2025.3559660",
    links: [{ label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/40266863/" }],
    abstractZh: "持续时间差异较大的动作容易被过度切分，或与相邻动作合并。该方法用时间概率金字塔描述不同尺度上的动作，再融合多个尺度的预测，取得统一的分割结果。",
    abstractEn: "Actions of different durations pose a trade-off between splitting a single action and merging neighboring ones. This method builds a temporal pyramid of action probabilities, then combines predictions across scales to produce a segmentation."
  },
  {
    id: "visual-cognition",
    title: "An Interactive System for Assessing Visual-Cognitive Abilities in Children with Autism Spectrum Disorder",
    authors: "Ziyang Tang, Haoyu Ji, Jinbin Guo, Zhihao Yang, Wenze Huang, Yu Gao, Xueting Liu, Jiao Liu, Hui Hu, Peile Zhang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "IEEE International Conference on Control and Automation", shortVenue: "ICCA",
    year: 2026, pages: "2042–2047", role: "coauthor", status: "published", doi: "10.1109/ICCA69928.2026.11618273",
    url: "https://doi.org/10.1109/ICCA69928.2026.11618273",
    abstractZh: "系统在桌面触屏上设置颜色和形状认知任务，将触控事件日志与摄像机记录的行为联系起来，用于评估孤独症谱系障碍儿童在任务中的视觉认知表现。",
    abstractEn: "A tabletop touchscreen presents tasks involving colors and shapes. The system pairs touch-event logs with video of the child's behavior to characterize visual-cognitive performance during the tasks."
  },
  {
    id: "dynamic-memory",
    title: "Dynamic Memory Reconciliation for Online Action Detection",
    authors: "Wenze Huang, Haoyu Ji, Zhihao Yang, Bowen Chen, Zimo Jiang, Zhiyong Wang, Weihong Ren, Honghai Liu",
    venue: "International Conference on Intelligent Robotics and Applications", shortVenue: "ICIRA",
    year: 2025, pages: "534–547", role: "coauthor", status: "published", doi: "10.1007/978-981-95-2101-2_44",
    url: "https://doi.org/10.1007/978-981-95-2101-2_44",
    abstractZh: "在线动作检测需要仅凭当前和以往的视频帧判断正在发生的动作。该方法用循环移位重组长期上下文，并对近期帧进行自适应门控，以提取与当前动作相关的变化线索。",
    abstractEn: "An online detector must identify an action using only frames already seen. This method reorganizes longer-term context through cyclic shifts and gates local features to emphasize changes relevant to the ongoing action."
  },
  {
    id: "multigranularity",
    title: "Efficient Skeleton-Based Action Segmentation via Multi-granularity Perception",
    authors: "Zhihao Yang, Haoyu Ji, Wenze Huang, Bowen Chen, Zimo Jiang, Weihong Ren, Zhiyong Wang, Honghai Liu",
    venue: "International Conference on Intelligent Robotics and Applications", shortVenue: "ICIRA",
    year: 2025, pages: "473–483", role: "coauthor", status: "published", doi: "10.1007/978-981-95-2101-2_39",
    url: "https://doi.org/10.1007/978-981-95-2101-2_39",
    abstractZh: "该方法逐步整合局部特征、多尺度时间注意力和全局上下文，以较低的计算开销识别不同持续时间的动作片段。研究在两个骨架动作分割基准上评估了这一架构。",
    abstractEn: "This lightweight architecture progressively combines local features, multiscale temporal attention and global context to segment actions at different durations. The study evaluates its balance of accuracy and computational cost on two benchmarks."
  },
  {
    id: "dual-loss",
    title: "Center and Link: A Dual-Loss Approach for Holistic Human Pose Estimation",
    authors: "Jinbin Guo, Haoyu Ji, Wenze Huang, Zhihao Yang, Yu Gao, Jian Huang, Zhiyong Wang",
    venue: "IFAC Symposium on Analysis, Design and Evaluation of Human–Machine Systems", shortVenue: "IFAC HMS",
    year: 2025, volume: "59(35)", pages: "232–237", role: "coauthor", status: "published", doi: "10.1016/j.ifacol.2025.12.481",
    url: "https://doi.org/10.1016/j.ifacol.2025.12.481",
    abstractZh: "人体姿态估计需要同时考虑单个关键点的位置与关键点之间的结构关系。该研究在训练中分别约束关键点中心和解剖连接关系，考察两种损失对模型收敛的影响。",
    abstractEn: "Human pose estimation depends on both the positions of keypoints and how they are connected. Two training losses supervise their centers and anatomical links. The study examines how these constraints affect convergence."
  },
  {
    id: "balance-assessment",
    title: "An Assessment System for Balance Abilities in Children with Autism Spectrum Disorder",
    authors: "Wenze Huang, Jin Li, Haoyu Ji, Boyu Ying, Xiaoxia Ma, Xiangdong Zhang, Zhiyong Wang",
    venue: "International Conference on Intelligent Robotics and Applications", shortVenue: "ICIRA",
    year: 2024, pages: "291–304", role: "coauthor", status: "published", doi: "10.1007/978-981-96-0777-8_21",
    url: "https://doi.org/10.1007/978-981-96-0777-8_21",
    abstractZh: "该研究围绕孤独症谱系障碍儿童的平衡能力设计评估系统，考察如何将儿童在平衡任务中的运动表现转化为可分析的行为记录。",
    abstractEn: "This study presents a system for assessing balance in children on the autism spectrum. It examines how movement during a balance task can be captured and analyzed as part of a behavioral assessment."
  },
  {
    id: "grouptrack",
    title: "GroupTrack: Multi-Object Tracking by Using Group Motion Patterns",
    authors: "Xinglong Xu, Weihong Ren, Gan Sun, Haoyu Ji, Yu Gao, Honghai Liu",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems", shortVenue: "IROS",
    year: 2024, pages: "4896–4903", role: "coauthor", status: "published", doi: "10.1109/IROS58592.2024.10802541",
    url: "https://doi.org/10.1109/IROS58592.2024.10802541",
    abstractZh: "在人群密集或遮挡场景中，邻近目标的运动可以辅助估计单个目标的位置。GroupTrack 从相邻轨迹中提取群体运动模式，用于预测轨迹并关联前后帧的检测结果。",
    abstractEn: "The motion of nearby targets can help predict where an occluded target is heading. GroupTrack assembles neighboring tracklets into groups and uses their movement patterns for trajectory prediction and data association."
  },
  {
    id: "part-motion-learning",
    title: "Language-Assisted Human Part Motion Learning for Skeleton-Based Temporal Action Segmentation",
    authors: "Bowen Chen, Haoyu Ji, Zhiyong Wang, Benjamin Filtjens, Chunzhuo Wang, Weihong Ren, Bart Vanrumste, Honghai Liu",
    venue: "arXiv:2410.06353", shortVenue: "arXiv",
    year: 2024, eprint: "2410.06353", primaryClass: "cs.CV", role: "coauthor", status: "preprint", doi: "10.48550/arXiv.2410.06353",
    url: "https://arxiv.org/abs/2410.06353",
    links: [{ label: "PDF", url: "https://arxiv.org/pdf/2410.06353" }],
    abstractZh: "LPL 同时学习全身运动与局部肢体运动的特征，用于逐帧识别连续骨架序列中的动作。在训练时，模型将这些特征与全身和身体部位两个层次的动作文本描述对齐，使相近动作之间的语义关系能够指导骨架特征学习。",
    abstractEn: "LPL combines whole-body movement with the motion of individual body parts to identify actions frame by frame. During training, it aligns skeleton features with descriptions of the action at both scales. This lets the model use semantic relationships between action labels when learning to distinguish movements."
  },
  {
    id: "behavioral-biomarkers",
    title: "A Framework for Behavioral Biomarker Analysis via Action Segmentation in Early Autism Screening",
    authors: "Wenze Huang, Bingrui Zhou, Bowen Chen, Haoyu Ji, Zhihao Yang, Yu Gao, Xueting Liu, Jingjing Liu, Weihong Ren, Zhiyong Wang, Xiu Xu, Honghai Liu",
    venue: "ENGINEERING Health and Rehabilitation Engineering", shortVenue: "EHRE",
    year: 2026, volume: "1(1)", pages: "93–107", role: "coauthor", status: "published", doi: "10.2738/ENGHRE.2026.0007",
    url: "https://doi.org/10.2738/ENGHRE.2026.0007",
    abstractZh: "该研究将动作分割用于孤独症早期筛查场景，把连续的行为观察切分为可分析的动作单元，进而提取和研究与筛查相关的行为标志物。",
    abstractEn: "The framework applies action segmentation to behavioral observations collected during early autism screening. It breaks continuous behavior into units that can be measured and used to investigate potential behavioral biomarkers."
  }
];

for (const paper of window.PAPERS) {
  paper.links ??= [];
}
