import { Check } from "lucide-react";

const tableData = [
  {
    item: "원유 관리",
    organic: "유기농 기준·인증 체계 기반 (제품별 상이)",
    regular: "일반 기준 기반 (제품별 상이)",
    check: "인증 표기/라벨 확인",
  },
  {
    item: "맛 성향",
    organic: "담백·고소·깔끔을 선호하는 경우 선택",
    regular: "브랜드/살균 방식에 따라 다양",
    check: '후기에서 "맛/비린맛/단맛" 키워드 확인',
  },
  {
    item: "가격대",
    organic: "대체로 높은 편 (관리·인증 비용 반영)",
    regular: "상대적으로 선택 폭 넓음",
    check: "예산 vs 가치 기준",
  },
  {
    item: "추천 상황",
    organic: "매일 마시는 '데일리'에 신경 쓰는 경우",
    regular: "가성비/다양한 선택이 필요한 경우",
    check: "소비 빈도에 따라 선택",
  },
];

const recommendations = [
  "우유를 자주 마셔서, 원유 관리 기준이 중요하다",
  "라떼/시리얼 등으로 활용해서 맛 밸런스가 중요하다",
  "가격보다 정보의 투명성·신뢰도를 우선한다",
];

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Compare & Choose
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            유기농 우유 vs 일반 우유
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/50">
                <th className="px-6 py-4 text-left font-bold text-foreground">항목</th>
                <th className="px-6 py-4 text-left font-bold text-primary">{'유기농 우유'}</th>
                <th className="px-6 py-4 text-left font-bold text-foreground">{'일반 우유'}</th>
                <th className="px-6 py-4 text-left font-bold text-accent">구매 시 체크</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/30 last:border-b-0 hover:bg-secondary/20 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                    {row.item}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{row.organic}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.regular}</td>
                  <td className="px-6 py-4 text-accent font-medium">{row.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Guide */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <h3 className="text-xl font-bold text-foreground mb-6 font-serif text-center">
            이런 분께 유기농 우유 추천
          </h3>
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-foreground leading-relaxed">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
