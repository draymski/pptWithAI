import { Page, PageContent, Header } from '../components/Page';
import { challenges, page2Images } from '../data/slides';

/** P2: 行业挑战 */
export const Page2 = () => (
  <Page>
    <PageContent>
      <Header
        title={'传统红树林调查的"物理局限"'}
        subtitle="Traditional Challenges in Mangrove Monitoring"
      />
      <p className="text-[#475569] mb-8 max-w-5xl leading-relaxed text-[15px]">
        {'在《湿地保护法》与国家"双碳"刚性考核下，高频次、高精度的生态监测已成刚需。然而，传统的调查手段正面临无法逾越的物理限制。'}
      </p>

      <div className="flex gap-10 h-[520px]">
        {/* Left 40% Images */}
        <div className="w-[40%] flex flex-col gap-3 justify-between">
          <div className="flex-1 relative rounded-sm overflow-hidden border border-[#E9ECEF] shadow-sm">
            <img src={page2Images.img1} className="w-full h-full object-cover" alt="传统人工调查现场" loading="lazy" />
          </div>
          <div className="flex-1 relative rounded-sm overflow-hidden border border-[#E9ECEF] shadow-sm">
            <img src={page2Images.img2} className="w-full h-full object-cover" alt="人工拉样方示意" loading="lazy" />
          </div>
        </div>

        {/* Right 60% Cards */}
        <div className="w-[60%] flex flex-col gap-4 justify-center py-0">
          {challenges.map((item, i) => (
            <div key={i} className="bg-[#F8F9FA] px-6 py-4.5 rounded-sm flex gap-6 items-start border border-transparent hover:border-[#E9ECEF] transition-colors shadow-sm">
              <div className="text-[#005C3E] mt-1 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1.5">
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
