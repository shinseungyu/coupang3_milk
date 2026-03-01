import { Sprout, Droplets, ChefHat, Eye, HelpCircle } from "lucide-react";

const points = [
  {
    icon: Sprout,
    title: "유기농 기준으로 관리되는 원유",
    description:
      "유기농 우유는 단순히 '느낌'이 아니라, 사료·사육·원유 관리 기준을 충족하는 시스템에 기반합니다. 본 상세페이지는 구매 전 확인을 돕기 위해, 제품 표기/고지 정보를 기준으로 핵심 내용을 정리했습니다.",
  },
  {
    icon: Droplets,
    title: "매일 마시기 좋은 '담백-고소-깔끔' 밸런스",
    description:
      "단맛을 강조하기보다 고소함과 깔끔한 끝맛에 초점을 둔 스타일이라, 질리지 않는 데일리 우유로 잘 맞습니다.",
  },
  {
    icon: ChefHat,
    title: "라떼·시리얼·요리에 두루 쓰는 활용도",
    description:
      "'그냥 마시는 용도'뿐 아니라, 라떼/시리얼/요리에서 풍미를 해치지 않고 안정적으로 받쳐주는 베이스가 됩니다.",
  },
  {
    icon: Eye,
    title: "인증/검사/품질 정보를 '보이는 형태'로 안내",
    description:
      "인증 마크가 있더라도 소비자가 체감하기 어려운 경우가 많아요. 이 페이지는 인증/검사/관리 포인트를 문장으로 풀어서 이해하기 쉽게 구성했습니다.",
  },
  {
    icon: HelpCircle,
    title: "구매 전 체크 포인트를 FAQ로 투명하게",
    description:
      '유통/보관/알레르기/취향 차이 등 "사소하지만 중요한 질문"까지 FAQ로 정리했습니다.',
  },
];

export function UspSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Why Special
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            이 우유가 특별한 이유
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="group flex gap-5 md:gap-6 rounded-2xl bg-card p-6 md:p-8 border border-border/60 transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <point.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  <span className="text-primary mr-2 font-serif">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
