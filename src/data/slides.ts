import React from 'react';
import {
  ShieldAlert, Bot, Eye,
  Database, Navigation,
} from 'lucide-react';

// ── 图片资源 ──
import coverImg from '../assets/mangrove/cover.png';
import page4TargetImg from '../assets/mangrove/page4-展示小目标检测效果.png';
import classImg1 from '../assets/mangrove/展示分类能力-1.png';
import classImg2 from '../assets/mangrove/展示分类能力-2.jpg';
import classImg3 from '../assets/mangrove/展示分类能力-3.jpg';
import classChart1 from '../assets/mangrove/表-树种统计柱状图.jpg';
import classChart2 from '../assets/mangrove/表-树种的冠幅统计柱状图.png';
import toleranceImg1 from '../assets/mangrove/展示杂草容错-1.jpg';
import toleranceImg2 from '../assets/mangrove/有难度的滩涂背景的提取能力-1.jpg';
import toleranceImg3 from '../assets/mangrove/展示杂草容错-3-大尺度.png';
import blockAnalysisImg from '../assets/mangrove/大区块的统计分析能力-1.jpg';
import page2Img_1 from '../assets/mangrove/传统人工-1.jpg';
import page2Img_2 from '../assets/mangrove/传统人工-2.png';
import endPage from '../assets/mangrove/尾页.jpg';

// ═══════════════════════════════════════════════════════
// P1: 封面
// ═══════════════════════════════════════════════════════
export { coverImg };

// ═══════════════════════════════════════════════════════
// P2: 行业挑战
// ═══════════════════════════════════════════════════════
export const page2Images = { img1: page2Img_1, img2: page2Img_2 };

export const challenges: { num: string; title: string; icon: React.ReactNode; desc: string }[] = [
  {
    num: '01',
    title: '滩涂泥泞 · 效率瓶颈',
    icon: React.createElement(Navigation, { size: 22 }),
    desc: '人工"拉样方"寸步难行，耗时动辄数十日至数月，且面临潮汐与陷溺安全风险。',
  },
  {
    num: '02',
    title: '样方偏差 · 精度局限',
    icon: React.createElement(Eye, { size: 22 }),
    desc: '人工抽样范围有限，样本代表性不足，同时受制于人员的主观因素，难以反映大尺度区域的真实生态状况。',
  },
  {
    num: '03',
    title: '地理数据 · 安全红线',
    icon: React.createElement(ShieldAlert, { size: 22 }),
    desc: '高精度正射影像（DOM）属政企内部高敏感数据，传统云端 AI 交付第三方处理，存在泄密与合规风险。',
  },
];

// ═══════════════════════════════════════════════════════
// P3: 解决方案
// ═══════════════════════════════════════════════════════
export const roiTable = {
  headers: ['评估维度', '传统人工调查', 'MVAS平台', '效能提升'],
  rows: [
    ['万亩作业周期', '10人团队 / 15-20 天', '单人航拍，1小时 AI 分析', '效率跃升 60倍+'],
    ['检测精细度', '"拉样方"估算，误差大', '100%全域单株级高精分割与计数', '精度极度细化'],
    ['作业安全系数', '滩涂陷入，风险高', '无人机遥控作业', '现场安全零风险'],
    ['生态指标数量', '数量固定，若扩展需重新实地拉样方', '植株长势、树种、数量、株距、株高、覆盖率等多种维度', '生态指标更丰富'],
  ],
};

export const advantages: { title: string; icon: React.ReactNode; desc: string }[] = [
  {
    title: '无人机航测 + 常态化智能监测',
    icon: React.createElement(Navigation, { size: 18 }),
    desc: '轻松覆盖万亩滩涂，实现极度降本增效；联动智能无人机机巢，支持全天候高频次常态化核查。',
  },
  {
    title: 'AI高效推理 + 数据可视化',
    icon: React.createElement(Bot, { size: 18 }),
    desc: '依托自研高精度图像识别大模型，从田间到报表，生态资产轻松监控，植株长势、树种、数量、株距、株高、覆盖率等数据精准触达。',
  },
  {
    title: '内网私有化部署 + 数据绝对安全',
    icon: React.createElement(Database, { size: 18 }),
    desc: '敏感数据零第三方接触，保障绝对合规；100%政企内网私有化运行，支持标准Web服务多端协同。',
  },
];

export const workflowSteps = [
  { label: '全自主无人机航测', style: 'green' as const },
  { label: '正射影像自动合成', style: 'gray' as const },
  {
    label: 'BladeMgv™ AI推理',
    style: 'green' as const,
    branches: ['单株检测', '树种识别', '存活度'],
  },
  { label: '生态指标多维核算', style: 'purple' as const },
  { label: '一站式报表产出', style: 'amber' as const },
];

// ═══════════════════════════════════════════════════════
// P4: 核心科技 I
// ═══════════════════════════════════════════════════════
export { page4TargetImg };

export const coreFeatures = [
  {
    title: '穿透高稠密重叠',
    desc: '自研多尺度特征融合与自适应注意力机制，厘米级精准辨别密集郁闭林冠下的单株红树。',
  },
  {
    title: '消除小株漏检',
    desc: '针对细小初生幼苗与小冠幅特征实施高保真局部重建，彻底扫除行业小目标漏检盲区。',
  },
  {
    title: '工业级性能',
    desc: '本地 GPU 算力硬件级加速，1小时检测万亩林区，实现全栈高效率与高精准度的完美统一。',
  },
];

// ═══════════════════════════════════════════════════════
// P5: 核心科技 II — 树种分类
// ═══════════════════════════════════════════════════════
export const speciesImages = [
  { img: classImg1, label: 'AI 优势树种光谱掩膜' },
  { img: classImg2, label: '精细化郁闭斑块分割' },
  { img: classImg3, label: '跨区域植被群落划分' },
];

export const speciesCharts = [
  { img: classChart1, label: '优势红树树种分布统计', dotColor: '#3B82F6' },
  { img: classChart2, label: '不同树种平均冠幅分析', dotColor: '#38BDF8' },
];

export const speciesNote =
  '* 注：数据分析图表中，QQ 表示秋茄 ，THS 表示桐花树 ，BGR 表示白骨壤，HHL 表示红海榄，ML 表示木榄 ，GG 表示死亡植株，TREE 表示其他混生林木。';

// ═══════════════════════════════════════════════════════
// P6: 核心科技 III — 环境容错
// ═══════════════════════════════════════════════════════
export const toleranceImages = {
  overview: { img: toleranceImg3, label: '大尺度广域高容错识别总览图', dotColor: '#00FF87' },
  details: [
    { img: toleranceImg1, label: '混生杂草中保持识别准确率', dotColor: '#38BDF8' },
    { img: toleranceImg2, label: '复杂泥水混合物高难度背景分离', dotColor: '#A855F7' },
  ],
};

export const toleranceNote =
  '本产品聚焦于高性价比 RGB 无人机正射影像。刃蓝科技同时提供针对"多光谱/高光谱"与"激光雷达"等高阶遥感数据的定制，满足树高精准测量与林分蓄积量估算需求。';

// ═══════════════════════════════════════════════════════
// P7: 场景 — 生态资产普查
// ═══════════════════════════════════════════════════════
export { blockAnalysisImg };

export const monitoringData = [
  { label: '监测区域面积', val: '66,073 m²' },
  { label: '植株识别总量', val: '24,405 棵' },
  { label: '植株冠幅监测', val: '平均 0.216 m² [0.01~2.20]' },
  { label: '死亡植株定位', val: '1,673 棵' },
  { label: '识别保存密度', val: '3,694 棵/公顷' },
  { label: '关键成效指标', val: '成活率 83.19% | 健康度 93.6%' },
];

export const deliverables = [
  {
    tag: 'GIS VECTOR',
    tagBg: 'bg-[#E6F3EE]',
    tagText: 'text-[#005C3E]',
    hoverBorder: 'hover:border-[#005C3E]',
    title: '原始空间地理矢量',
    desc: '支持一键导出含高精检测边缘的 Shapefile、GeoJSON 等标准格式，无缝集成至 ArcGIS、QGIS 开展高级拓扑分析。',
  },
  {
    tag: 'ASSET REPORT',
    tagBg: 'bg-[#FFFBEB]',
    tagText: 'text-[#D97706]',
    hoverBorder: 'hover:border-[#D97706]',
    title: '多维资产统计报表',
    desc: '自动生成全域树种分布、冠幅比例等图表，支持一键导出可视化专业分析报表，全方位赋能日常汇报。',
  },
];

// ═══════════════════════════════════════════════════════
// P8: 封底
// ═══════════════════════════════════════════════════════
export { endPage };
