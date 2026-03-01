"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "제품/맛 관련",
    items: [
      {
        q: "유기농 우유는 일반 우유랑 맛이 다른가요?",
        a: "유기농 여부 자체가 맛을 '보장'하진 않지만, 소비자들은 보통 담백함/깔끔함/고소함의 균형을 기대하고 선택하는 경우가 많습니다. 다만 실제 맛은 브랜드, 원유 구성, 살균 방식에 따라 달라질 수 있어요.",
      },
      {
        q: "라떼로 만들면 잘 어울리나요?",
        a: "라떼는 우유가 커피의 쓴맛을 눌러주면서도 고소함을 올려야 균형이 좋아요. 본 제품은 고소함과 깔끔한 끝맛을 중심으로 한 타입이라 라떼 활용에 무난합니다 (개인 취향 차이).",
      },
      {
        q: "비린맛이 나지 않나요?",
        a: '우유의 "비린맛" 체감은 개인차가 크고, 원유/가공/보관 상태에도 영향을 받습니다. 수령 후에는 즉시 냉장 보관하고, 개봉 후에는 가능한 빠르게 섭취하는 것을 권장합니다.',
      },
    ],
  },
  {
    category: "원재료/품질 관련",
    items: [
      {
        q: "원유 100%인가요?",
        a: "원유 함량/구성은 제품마다 다릅니다. 정확한 내용은 제품 라벨 및 상품 상세 표기를 기준으로 확인해 주세요.",
      },
      {
        q: "유기농 인증은 어떤 기준인가요?",
        a: '인증은 국가/기관 및 제품 표기 기준에 따라 달라질 수 있습니다. 중요한 건 "유기농" 문구만이 아니라 인증 마크와 인증 정보가 실제로 표기되어 있는지를 확인하는 것입니다.',
      },
      {
        q: "HACCP이 있으면 더 안전한가요?",
        a: 'HACCP은 위해 요소를 관리하는 시스템으로, 제품에 해당 표시가 있다면 공정 관리 체계가 운영됨을 의미합니다. 다만 "어떤 제품이든 100%" 같은 표현은 할 수 없으므로, 보관/유통 조건도 함께 지키는 것이 중요합니다.',
      },
    ],
  },
  {
    category: "배송/보관/섭취 관련",
    items: [
      {
        q: "보관은 어떻게 해야 하나요?",
        a: "기본은 냉장 보관이며, 수령 후 가능한 빠르게 냉장고에 넣어 주세요. 자세한 보관 온도/유통기한/개봉 후 권장 섭취기간은 제품 표기 기준을 따라야 합니다.",
      },
      {
        q: "개봉 후 얼마나 빨리 마셔야 하나요?",
        a: "개봉 후에는 공기 접촉과 냉장고 환경에 따라 맛이 변할 수 있어요. 일반적으로는 가급적 빠르게 섭취를 권장하며, 정확한 가이드는 제품 표기/제조사 안내를 확인해 주세요.",
      },
      {
        q: "아이도 마셔도 되나요?",
        a: "우유는 대표적인 알레르기 유발 식품입니다. 알레르기나 특이체질이 있다면 전문의와 상담이 필요할 수 있고, 제품 라벨의 알레르기 표기를 확인해 주세요.",
      },
    ],
  },
  {
    category: "구매 팁",
    items: [
      {
        q: "유기농 우유를 고를 때 가장 먼저 볼 것은?",
        a: '(1) 인증 표기 (2) 원재료/원유 구성 (3) 살균/가공 정보(표기되는 경우) (4) 후기에서 "맛/비린맛/활용도" 키워드 순으로 보면 실패 확률이 줄어듭니다.',
      },
    ],
  },
];

export function FaqSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            자주 묻는 질문
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-primary/20">
                {cat.category}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {cat.items.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${catIdx}-${idx}`}
                    className="border-border/40"
                  >
                    <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary py-5 text-base">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
