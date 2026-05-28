import React from 'react';
import {
    Leaf, ShieldAlert, Cpu, Eye, BarChart,
    Database, Network, Zap, Lock,
    ArrowRight, Map, QrCode, Mail, Globe, Navigation, Search, CheckCircle2, CloudOff
} from 'lucide-react';

// === 全新色彩规范 (B2B/B2G 极简标准) ===
const COLORS = {
    title: '#1E293B',    // 稳重深灰蓝
    body: '#475569',     // 优雅灰色
    brand: '#005C3E',    // 权威生态绿
    accent: '#00A35C',   // 智能科技绿
    bgMain: '#FFFFFF',   // 纯白画布
    bgCard: '#F8F9FA',   // 极轻柔浅灰
    line: '#E9ECEF'      // 网格/分割线
};

// === 基础布局组件 ===
const Page = ({ children, className = '' }) => (
    <div
        className={`relative w-full max-w-[1190px] mx-auto aspect-[297/210] shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-12 overflow-hidden flex flex-col bg-white text-[#475569] ${className}`}
    >
        {children}
    </div>
);

// 奢侈级页边距统一包装器 (约 28mm 左右，25mm 上下) + 全局水印背景
const PageContent = ({ children, className = '' }) => (
    <>
        {/* 背景图层：红树林航拍背景，大幅调高透明度，仅保留黑白去色以确保可见 */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop"
                alt="Mangrove Watermark Background"
                className="w-full h-full object-cover opacity-15 grayscale"
            />
        </div>

        {/* 内容图层：加上 relative z-10 确保文字和卡片浮在背景之上 */}
        <div className={`relative z-10 w-full h-full px-16 py-14 flex flex-col ${className}`}>
            {children}
        </div>
    </>
);

const Header = ({ title, subtitle }) => (
    <div className="mb-10">
        <h2 className="text-3xl font-serif font-bold mb-3 text-[#1E293B] tracking-wide">{title}</h2>
        <p className="text-sm tracking-widest uppercase font-sans text-[#475569] opacity-80">{subtitle}</p>
    </div>
);

// === P1: 封面 ===
const Page1 = () => (
    <Page className="flex flex-row">
        {/* Left 35% */}
        <div className="w-[35%] bg-[#F8F9FA] px-14 py-20 flex flex-col justify-between z-10 border-r border-[#E9ECEF]">
            <div className="mt-8">
                <h1 className="text-4xl font-serif font-bold text-[#1E293B] leading-tight mb-4 tracking-widest">
                    红树林视觉<br />分析系统
                </h1>
                <div className="text-[#005C3E] text-[18px] font-bold font-sans tracking-wide mb-8">
                    Mangrove Visual Analysis System (MVAS)
                </div>
                <div className="w-10 h-1 bg-[#00A35C] mb-8"></div>
                <div className="text-[#475569] space-y-3 font-sans text-sm leading-relaxed">
                    <p className="font-medium">单株级精准检测 · 智能化树种识别</p>
                    <p className="font-medium">守护“海岸卫士”的 AI 力量</p>
                    <p className="text-xs text-[#475569]/60 mt-4 tracking-wider uppercase">Precision Individual Tree Detection & Species Identification</p>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white border border-[#E9ECEF] rounded flex items-center justify-center p-1 shrink-0 shadow-sm">
                        <QrCode size={48} color={COLORS.title} />
                    </div>
                    <div className="pt-1">
                        <p className="text-sm font-bold text-[#1E293B] mb-1">广州刃蓝科技有限公司</p>
                        <p className="text-xs text-[#475569] mb-1 uppercase text-[10px] tracking-wider">Guangzhou Renlan Technology Co., Ltd.</p>
                        <p className="text-xs text-[#475569]/80">官方支持: support@renlan.top</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right 65% */}
        <div className="w-[65%] relative bg-white overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop"
                alt="Mangrove Forest"
                className="w-full h-full object-cover opacity-90"
            />
            {/* Clean gradient transition to white on the left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-1/2"></div>
            <div className="absolute inset-0 bg-white/10"></div>

            {/* Decorative vertical text */}
            <div
                className="absolute top-16 right-16 text-[#005C3E] opacity-[0.10] text-7xl font-serif font-bold tracking-[1.5em] select-none"
                style={{ writingMode: 'vertical-rl' }}
            >
                万亩滩涂·见梢知林
            </div>
        </div>
    </Page>
);

// === P2: 行业挑战 ===
const Page2 = () => (
    <Page>
        <PageContent>
            <Header
                title="传统红树林调查面临的“物理极限”"
                subtitle="Traditional Challenges in Mangrove Monitoring"
            />
            <p className="text-[#475569] mb-10 max-w-4xl leading-relaxed text-[15px]">
                在《湿地保护法》与国家“双碳”刚性考核下，高频次、高精度的生态监测已成刚需。然而，传统的调查手段正面临无法逾越的物理限制。
            </p>

            <div className="flex gap-10 h-full">
                {/* Left 40% Image */}
                <div className="w-[40%] relative rounded-sm overflow-hidden border border-[#E9ECEF]">
                    <img
                        src="https://images.unsplash.com/photo-1500367215255-0e0b2013980d?q=80&w=1000&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
                        alt="Muddy wetland"
                    />
                </div>

                {/* Right 60% Cards */}
                <div className="w-[60%] flex flex-col justify-between py-2">
                    {[
                        { num: "01", title: "滩涂泥泞 · 效率瓶颈", icon: <Navigation size={22} />, desc: "人工“拉样方”寸步难行，耗时动辄数月，且面临潮汐与陷溺安全隐患。" },
                        { num: "02", title: "郁闭密集 · 精度局限", icon: <Eye size={22} />, desc: "通用卫星遥感无法穿透密集交错的林冠，单株级计数误差大，难以识别具体树种。" },
                        { num: "03", title: "地理数据 · 安全红线", icon: <ShieldAlert size={22} />, desc: "高精度正射影像（DOM）属政企内部高敏感数据，传统云端 AI 交付第三方处理，存在泄密与合规风险。" }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#F8F9FA] px-8 py-7 rounded-sm flex gap-6 items-start border border-transparent hover:border-[#E9ECEF] transition-colors">
                            <div className="text-[#005C3E] mt-1 shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <div className="flex items-baseline gap-3 mb-2">
                                    <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
                                </div>
                                <p className="text-[#475569] leading-relaxed text-[13.5px]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageContent>
    </Page>
);

// === P3: 解决方案 ===
const Page3 = () => (
    <Page>
        <PageContent>
            <Header
                title="MVAS：私有化部署的红树林 AI 精准分析平台"
                subtitle="Mangrove Visual Analysis System - Secure Local Platform"
            />

            <div className="flex flex-col h-full gap-8">

                {/* Top: ROI Table */}
                <div className="w-full">
                    <div className="flex items-center gap-2 mb-4">
                        <BarChart size={18} className="text-[#00A35C]" />
                        <h3 className="text-[15px] font-bold text-[#1E293B]">百倍效能跃升 —— 核心价值 ROI 对比</h3>
                    </div>
                    <div className="w-full border border-[#E9ECEF] rounded-sm bg-[#F8F9FA] overflow-hidden">
                        <table className="w-full text-left border-collapse text-[13.5px]">
                            <thead>
                                <tr className="border-b border-[#E9ECEF]">
                                    <th className="p-4 font-bold text-[#1E293B] w-[20%]">评估维度</th>
                                    <th className="p-4 font-bold text-[#1E293B] w-[30%]">传统人工调查</th>
                                    <th className="p-4 font-bold text-[#005C3E] w-[30%]">MVAS平台</th>
                                    <th className="p-4 font-bold text-[#00A35C] w-[20%]">效能提升</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E9ECEF] bg-white">
                                {[
                                    ["万亩作业周期", "10人团队 / 15-20 个工作日", "单人航拍 + 2 小时本地 AI 分析", "效率跃升 60倍+"],
                                    ["检测精度与粒度", "抽样“拉样方”估算，误差大", "100%全域单株级高精分割与计数", "精度颗粒度极大细化"],
                                    ["作业安全系数", "滩涂陷入、蚊虫潮汐，风险高", "无人机航拍，人员安全零接触", "现场安全风险降为零"],
                                    ["地理数据合规", "涉密DOM数据上云，合规风险高", "100%本地私有化，数据零上云", "规避敏感地理数据泄露风险"]
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="p-4 font-bold text-[#475569] bg-[#F8F9FA]/50">{row[0]}</td>
                                        <td className="p-4 text-[#475569]">{row[1]}</td>
                                        <td className="p-4 font-medium text-[#005C3E]">{row[2]}</td>
                                        <td className="p-4 font-bold text-[#00A35C]">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Middle: Horizontal Flowchart */}
                <div className="w-full pt-4">
                    <div className="flex items-center justify-between">
                        {[
                            { step: "1", title: "影像物理导入", desc: "本地物理介质导入" },
                            { step: "2", title: "BladeMgv™ 智能识别", desc: "自研大模型快速检测" },
                            { step: "3", title: "生态数据核算", desc: "计算冠幅/树种/碳储量" },
                            { step: "4", title: "Web 多端交互", desc: "内网任意终端免密查看" }
                        ].map((node, idx, arr) => (
                            <React.Fragment key={idx}>
                                <div className="flex-1 bg-white border border-[#E9ECEF] rounded-sm p-4 text-center shadow-sm relative group">
                                    <div className="text-[11px] text-[#00A35C] font-bold mb-1 uppercase tracking-wider">Step {node.step}</div>
                                    <h4 className="text-[14px] font-bold text-[#1E293B] mb-2">{node.title}</h4>
                                    <p className="text-[12px] text-[#475569]">{node.desc}</p>
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className="w-12 flex items-center justify-center shrink-0">
                                        <ArrowRight className="text-[#00A35C]" size={20} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Bottom: 3 Advantages */}
                <div className="flex gap-8 mt-2">
                    <div className="flex-1">
                        <h4 className="text-[14px] font-bold text-[#1E293B] mb-2 flex items-center gap-2">
                            <ShieldAlert size={16} className="text-[#005C3E]" /> 数据本地安全 (Secure)
                        </h4>
                        <p className="text-[12.5px] text-[#475569] leading-relaxed">100% 局域网内网部署，敏感数据零上云，完美规避地理信息安全与合规红线。</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-[14px] font-bold text-[#1E293B] mb-2 flex items-center gap-2">
                            <Cpu size={16} className="text-[#005C3E]" /> 算力自主吞吐 (Dedicated)
                        </h4>
                        <p className="text-[12.5px] text-[#475569] leading-relaxed">独占本地 GPU 算力，无排队带宽限制，万亩级大图小时级极速出图。</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-[14px] font-bold text-[#1E293B] mb-2 flex items-center gap-2">
                            <Network size={16} className="text-[#005C3E]" /> 极简内网访问 (Web-Client)
                        </h4>
                        <p className="text-[12.5px] text-[#475569] leading-relaxed">标准 Web 浏览器一键访问，多终端免插件，实现极简协同办公。</p>
                    </div>
                </div>
            </div>
        </PageContent>
    </Page>
);

// === P4: 核心科技 I ===
const Page4 = () => (
    <Page>
        <PageContent className="justify-between">
            <Header
                title="BladeMgv™ 刃蓝高精单株检测网络"
                subtitle="Proprietary Deep Learning Detection Network for Dense Canopies"
            />

            <p className="text-[#475569] text-[15px] max-w-4xl leading-relaxed mb-6">
                <strong className="text-[#1E293B] font-bold">BladeMgv™</strong> 是专为密集、交错的红树林植被定制的自研深度学习检测网络。
            </p>

            <div className="flex gap-8 relative mb-10 h-[280px]">
                {/* Before Image */}
                <div className="w-1/2 h-full border border-[#E9ECEF] p-2 bg-[#F8F9FA] rounded-sm relative">
                    <img
                        src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=1000&auto=format&fit=crop"
                        className="w-full h-full object-cover rounded-sm"
                        alt="Raw drone footage"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-sm shadow-sm text-[12px] font-bold text-[#1E293B]">
                        原始高分正射影像 (RGB)
                    </div>
                </div>

                {/* VS Arrow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-[#E9ECEF] flex items-center justify-center z-10 shadow-md">
                    <ArrowRight className="text-[#00A35C]" size={20} />
                </div>

                {/* After Image (Simulated AI Masking) */}
                <div className="w-1/2 h-full border border-[#E9ECEF] p-2 bg-[#F8F9FA] rounded-sm relative">
                    <div className="w-full h-full relative overflow-hidden rounded-sm bg-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="AI Processed"
                        />
                        {/* Overlay grid & dots to simulate AI bounding boxes with tech green */}
                        <div className="absolute inset-0 bg-[#00A35C]/10 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwQzI3MiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIDIiIG9wYWNpdHk9IjAuNiIvPjxwYXRoIGQ9Ik0yMCAyMHYtMm0wIDR2LTJtMiAySDIwbS0yIDBoMiIgc3Ryb2tlPSIjMDA1QzNFIi8+PC9zdmc+')] opacity-60"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-sm shadow-sm text-[12px] font-bold text-[#005C3E] border border-[#00A35C]/30 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00A35C]"></div>
                        AI 高精单株分割掩膜
                    </div>
                </div>
            </div>

            {/* Bottom Features */}
            <div className="flex gap-10">
                <div className="w-1/3">
                    <h4 className="text-[#1E293B] font-bold mb-3 flex items-center gap-2 text-[15px]">
                        <span className="w-1.5 h-4 bg-[#005C3E]"></span> 穿透密集重叠
                    </h4>
                    <p className="text-[#475569] text-[13.5px] leading-relaxed">自研多尺度特征融合与自适应注意力机制，厘米级精准分割边缘交错的密集郁闭林冠。</p>
                </div>
                <div className="w-1/3">
                    <h4 className="text-[#1E293B] font-bold mb-3 flex items-center gap-2 text-[15px]">
                        <span className="w-1.5 h-4 bg-[#005C3E]"></span> 消除小株漏检
                    </h4>
                    <p className="text-[#475569] text-[13.5px] leading-relaxed">针对幼苗期与生长初期的细小树冠进行局部特征重建，单株最小检出冠幅达分米级。</p>
                </div>
                <div className="w-1/3">
                    <h4 className="text-[#1E293B] font-bold mb-3 flex items-center gap-2 text-[15px]">
                        <span className="w-1.5 h-4 bg-[#005C3E]"></span> 工业级性能
                    </h4>
                    <p className="text-[#475569] text-[13.5px] leading-relaxed mb-2">本地 GPU 算力硬件级加速，万亩林区数分钟即可完成单株分割，兼顾极速与极准。</p>
                    <div className="text-[13px] font-mono text-[#005C3E] font-bold">
                        IoU ≥ 88% <span className="mx-2 text-[#E9ECEF]">|</span> Recall ≥ 95%
                    </div>
                </div>
            </div>
        </PageContent>
    </Page>
);

// === P5: 核心科技 II ===
const Page5 = () => (
    <Page>
        <PageContent>
            <Header
                title="复杂环境下的高容错智能化树种分类"
                subtitle="High-Tolerance Intelligent Tree Species Classification"
            />

            <p className="text-[#475569] text-[15px] max-w-4xl leading-relaxed mb-6">
                <strong className="text-[#1E293B] font-bold">BladeMgv™</strong> 提取高阶空谱特征，告别人工目视判读，实现高容错、自动化的树种分割识别。
            </p>

            <div className="mb-8 flex gap-6 text-[13.5px] bg-[#F8F9FA] p-5 rounded-sm border border-[#E9ECEF]">
                <div className="font-bold text-[#1E293B] pr-6 border-r border-[#E9ECEF] flex items-center">三大环境<br />自适应特征</div>
                <div className="text-[#475569] flex-1 flex flex-col justify-center"><strong className="text-[#005C3E] mb-1">● 自适应潮汐涨落：</strong>自动校准并识别被潮水部分淹没的冠幅形态，保障水陆过渡带精度。</div>
                <div className="text-[#475569] flex-1 flex flex-col justify-center px-4 border-l border-r border-[#E9ECEF]"><strong className="text-[#005C3E] mb-1">● 光影阴影高容错：</strong>强力抵抗复杂云影、树冠投影及光照不均等恶劣环境干扰。</div>
                <div className="text-[#475569] flex-1 flex flex-col justify-center pl-2"><strong className="text-[#005C3E] mb-1">● 伴生背景精剔除：</strong>智能识别并过滤滩涂、水体、杂草，精准锁定红树林主体。</div>
            </div>

            <div className="mb-4">
                <h4 className="font-bold text-[#1E293B] text-[15px] mb-4">已支持优势树种</h4>
                {/* Species Grid */}
                <div className="grid grid-cols-3 gap-[18px]">
                    {[
                        { name: "红海榄", lat: "Rhizophora stylosa", color: "#00A35C", img: "https://images.unsplash.com/photo-1615569562725-b91ec0bafda0?q=80&w=600&auto=format&fit=crop" },
                        { name: "白骨壤", lat: "Avicennia marina", color: "#A3E635", img: "https://images.unsplash.com/photo-1596328346061-460d3fc0e7dc?q=80&w=600&auto=format&fit=crop" },
                        { name: "桐花树", lat: "Aegiceras corniculatum", color: "#34D399", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop" }
                    ].map((item, i) => (
                        <div key={i} className="border border-[#E9ECEF] bg-white flex flex-col p-2 rounded-sm">
                            <div className="h-32 relative overflow-hidden rounded-sm bg-[#F8F9FA]">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                {/* Mask simulation */}
                                <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundColor: item.color }}></div>
                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/90 text-[10px] font-bold rounded-sm border border-black/10" style={{ color: COLORS.brand }}>
                                    AI 语义分割掩膜
                                </div>
                            </div>
                            <div className="p-3 text-center">
                                <h3 className="text-[16px] font-bold text-[#1E293B] mb-0.5">{item.name}</h3>
                                <p className="text-[12px] text-[#475569] italic font-serif">{item.lat}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-auto border-t border-[#E9ECEF] pt-4">
                <div className="text-[11.5px] text-[#475569] leading-relaxed">
                    <span className="text-[#005C3E] font-bold">* 多源数据拓展服务说明：</span>
                    本系统(MVAS)聚焦于高性价比 RGB 无人机正射影像。刃蓝科技同时提供针对“多光谱/高光谱”与“激光雷达(LiDAR)”等高阶遥感数据的定制系统，满足树高精准测量与林分蓄积量估算需求。
                </div>
            </div>
        </PageContent>
    </Page>
);

// === P6: 场景 I ===
const Page6 = () => (
    <Page>
        <PageContent>
            <Header
                title="林业生态资产普查与常态化监测"
                subtitle="Eco-Asset Inventory and Routine Forestry Monitoring"
            />

            <p className="text-[14px] text-[#475569] mb-8">
                <strong className="text-[#1E293B] mr-2">目标受众：</strong>地方林业局、生态环境局、保护区管理局、湿地公园、林业设计院。
            </p>

            <div className="flex gap-10 h-full">
                {/* Left 55% - Light Theme Dashboard */}
                <div className="w-[55%] bg-[#F8F9FA] rounded-sm border border-[#E9ECEF] p-4 flex flex-col relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E9ECEF]">
                        <div className="font-bold text-[#1E293B] text-sm flex items-center gap-2">
                            <Map size={16} className="text-[#005C3E]" /> 监测范围: 淇澳岛红树林保护区
                        </div>
                        <div className="flex gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00A35C] mt-1"></span>
                            <span className="text-xs text-[#475569]">系统在线</span>
                        </div>
                    </div>

                    <div className="flex-1 flex gap-4">
                        {/* Map Area */}
                        <div className="flex-1 bg-white border border-[#E9ECEF] relative rounded-sm overflow-hidden p-1">
                            <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                                {/* Simulate heat/density map dots */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00A35C_1px,transparent_1px)] bg-[size:10px_10px] opacity-30"></div>
                            </div>
                            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded shadow-sm text-[10px] font-bold text-[#1E293B] border border-[#E9ECEF] flex items-center gap-2">
                                <Eye size={12} className="text-[#005C3E]" /> 单株定位图层
                            </div>
                        </div>

                        {/* Stats Area */}
                        <div className="w-[140px] flex flex-col gap-3">
                            <div className="bg-white border border-[#E9ECEF] p-3 rounded-sm text-center shadow-sm">
                                <div className="text-[10px] text-[#475569] mb-1">全域单株总数</div>
                                <div className="text-[18px] font-bold text-[#005C3E] font-mono">142,508</div>
                            </div>
                            <div className="bg-white border border-[#E9ECEF] p-3 rounded-sm text-center shadow-sm">
                                <div className="text-[10px] text-[#475569] mb-1">林区覆盖度</div>
                                <div className="text-[18px] font-bold text-[#005C3E] font-mono">87.3%</div>
                            </div>
                            <div className="flex-1 bg-white border border-[#E9ECEF] p-3 rounded-sm flex flex-col justify-end shadow-sm relative overflow-hidden">
                                <div className="text-[10px] text-[#475569] absolute top-3 left-3">生长趋势</div>
                                {/* Fake chart bars */}
                                <div className="flex items-end gap-1 h-12 w-full mt-auto opacity-70">
                                    <div className="w-full bg-[#E9ECEF] h-[40%]"></div>
                                    <div className="w-full bg-[#E9ECEF] h-[55%]"></div>
                                    <div className="w-full bg-[#E9ECEF] h-[45%]"></div>
                                    <div className="w-full bg-[#00A35C] h-[80%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right 45% - Cards */}
                <div className="w-[45%] flex flex-col justify-between py-2">
                    {[
                        { title: "常态化资产普查（小时级分析）", icon: <BarChart />, desc: "一键生成林区生态报告，自动统计全域林区覆盖度、单株总数、冠幅面积分布。" },
                        { title: "全周期生长监测（厘米级轨迹）", icon: <Network />, desc: "自动比现代历史影像，精准量化单株冠幅变化趋势，科学评估人工修复林存活率。" },
                        { title: "退化与入侵早期预警", icon: <ShieldAlert />, desc: "精准定位林木枯死与病虫害斑块，早期发现并拦截互花米草等外来物种入侵。" }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#F8F9FA] px-6 py-6 rounded-sm border border-[#E9ECEF] shadow-sm flex flex-col justify-center">
                            <h4 className="font-bold text-[#1E293B] text-[15px] mb-2 flex items-center gap-2">
                                <span className="text-[#005C3E]">{item.icon}</span> {item.title}
                            </h4>
                            <p className="text-[13px] text-[#475569] leading-relaxed pl-8">■ {item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageContent>
    </Page>
);

// === P7: 场景 II ===
const Page7 = () => (
    <Page>
        <PageContent>
            <Header
                title="单株级蓝碳资产核算与 ESG 科学计量"
                subtitle="Individual-Tree Level Blue Carbon Accounting and ESG Verification"
            />

            <p className="text-[14px] text-[#475569] mb-4">
                <strong className="text-[#1E293B] mr-2">目标受众：</strong>蓝碳项目投资商与开发商、ESG 咨询机构、碳汇核证机构、科研院所。
            </p>

            <div className="mb-8 font-bold text-[#005C3E] text-[16px]">
                核心价值主张：让每一吨蓝碳，都有据可依，有迹可循。
            </div>

            {/* Scientific Flowchart */}
            <div className="flex items-center justify-between bg-white px-8 py-10 rounded-sm border border-[#E9ECEF] shadow-sm mb-10 relative overflow-hidden">
                {/* Math background shadow */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 text-[80px] font-serif italic text-[#F8F9FA] font-bold pointer-events-none select-none">
                    ∑B_i
                </div>
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(#F8F9FA_1px,transparent_1px),linear-gradient(90deg,#F8F9FA_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none"></div>

                {[
                    { title: "MVAS 精准分割", icon: <Eye />, desc: "获取高精边界" },
                    { title: "测算单冠面积", math: "S_i", desc: "提取冠幅投影" },
                    { title: "带入生物量公式", math: "B_i", desc: "科学反演数据" },
                    { title: "估算总碳储量", icon: <Database />, desc: "高标准核证输出" }
                ].map((step, idx, arr) => (
                    <React.Fragment key={idx}>
                        <div className="flex flex-col items-center text-center z-10 w-32 relative bg-white px-2 py-2">
                            <div className="w-16 h-16 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#005C3E] mb-4 shadow-sm border border-[#E9ECEF]">
                                {step.icon ? step.icon : <span className="font-serif italic text-xl font-bold">{step.math}</span>}
                            </div>
                            <h4 className="font-bold text-[#1E293B] text-[13.5px] mb-1">{step.title}</h4>
                            <p className="text-[12px] text-[#475569]">{step.desc}</p>
                        </div>
                        {idx < arr.length - 1 && (
                            <div className="flex-1 flex items-center justify-center z-10">
                                <div className="w-full h-px bg-[#00A35C] relative">
                                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#00A35C] bg-white px-1" size={24} />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#F8F9FA] p-6 rounded-sm border border-[#E9ECEF]">
                    <h4 className="font-bold text-[#1E293B] mb-3 text-[14px]">打破“粗放估算”，符合 VCS 等国际高标准核证</h4>
                    <p className="text-[12.5px] text-[#475569] leading-relaxed">提取每株红树林的真实“冠幅投影面积 ({"$S_{冠幅}$"})”，为碳储量计量提供高置信度底层数据。</p>
                </div>
                <div className="bg-[#F8F9FA] p-6 rounded-sm border border-[#E9ECEF]">
                    <h4 className="font-bold text-[#1E293B] mb-3 text-[14px]">科学的生物量反演数据链条</h4>
                    <p className="text-[12.5px] text-[#475569] leading-relaxed">基于单株精准测量，打通：冠幅面积 → 单株生物量 → 单株固碳量 → 全域碳储量。数据链条透明可追溯。</p>
                </div>
                <div className="bg-[#F8F9FA] p-6 rounded-sm border border-[#E9ECEF]">
                    <h4 className="font-bold text-[#1E293B] mb-3 text-[14px]">企业 ESG 项目成效可视化呈现</h4>
                    <p className="text-[12.5px] text-[#475569] leading-relaxed">为红树林生态修复项目提供可审计、直观的 AI 监测凭证，完美赋能企业 ESG 报告核心环境数据披露。</p>
                </div>
            </div>
        </PageContent>
    </Page>
);

// === P8: 封底 ===
const Page8 = () => (
    <Page className="flex flex-row">
        {/* Left Side 60% */}
        <div className="w-[60%] px-16 py-20 flex flex-col justify-between bg-white">
            <div>
                <h2 className="text-[34px] font-serif font-bold text-[#1E293B] mb-4 leading-snug tracking-wider">
                    用 AI 算力，守护每一抹海岸绿意
                </h2>
                <p className="text-[#475569] text-sm uppercase tracking-widest font-sans opacity-80">
                    Empowering Mangrove Conservation with Intelligent Computing.
                </p>
            </div>

            <div className="mb-8">
                <h1 className="text-xl font-bold text-[#005C3E] tracking-widest mb-1">广州刃蓝科技有限公司</h1>
                <p className="text-[11px] text-[#475569] uppercase tracking-widest font-sans">Guangzhou Renlan Technology Co., Ltd.</p>
            </div>
        </div>

        {/* Right Side 40% */}
        <div className="w-[40%] bg-[#F8F9FA] px-14 py-20 flex flex-col justify-between items-end text-right border-l border-[#E9ECEF]">

            {/* Contact Info (Aligned right/bottom) */}
            <div className="mt-auto space-y-4 text-[13.5px] text-[#475569] leading-relaxed text-right w-full flex flex-col items-end">
                <div><strong className="text-[#1E293B] font-bold">官方网站：</strong>www.renlan.top</div>
                <div><strong className="text-[#1E293B] font-bold">联系邮箱：</strong>support@renlan.top</div>
                <div><strong className="text-[#1E293B] font-bold">公司地址：</strong>广东省广州市天河区<br />高新技术产业开发区</div>
            </div>

            {/* QR Code Section */}
            <div className="mt-16 flex flex-col items-end">
                <div className="w-[110px] h-[110px] bg-white border border-[#E9ECEF] rounded-sm flex items-center justify-center p-2 mb-4 shadow-sm">
                    <QrCode size={80} color={COLORS.title} strokeWidth={1.5} />
                </div>
                <p className="text-[12.5px] text-[#1E293B] font-bold mb-1">扫码联系技术专家</p>
                <p className="text-[11px] text-[#475569]">获取系统详细部署方案与行业技术白皮书</p>
            </div>
        </div>
    </Page>
);

// === 主渲染应用 ===
export default function App() {
    return (
        <div className="min-h-screen bg-gray-200 py-12 px-4 font-sans text-[#475569]">
            <div className="max-w-[1200px] mx-auto mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 font-serif">MVAS 产品手册 (全新浅色极简版)</h1>
                <p className="text-gray-500 mt-2 text-sm">基于 A4 横版 (297x210mm) | B2B 国际主流极简风格 | 建议全屏阅览</p>
            </div>

            <div className="flex flex-col items-center">
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
                <Page7 />
                <Page8 />
            </div>
        </div>
    );
}



