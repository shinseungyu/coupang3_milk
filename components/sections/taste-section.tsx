import Image from "next/image";
import { Coffee, Wheat, Dumbbell, Soup, Croissant } from "lucide-react";

const usages = [
  {
    icon: Coffee,
    label: "라떼",
    desc: "고소함이 커피와 자연스럽게 어울리는 베이스",
    image: "/images/latte.jpg",
  },
  {
    icon: Wheat,
    label: "시리얼/그래놀라",
    desc: "곡물 맛을 살리면서도 풍미는 더해주는 조합",
    image: "/images/cereal.jpg",
  },
  {
    icon: Dumbbell,
    label: "오트밀/프로틴",
    desc: "부담 없는 담백함으로 섞기 좋음",
    image: null,
  },
  {
    icon: Soup,
    label: "요리(스프/파스타)",
    desc: "크림 소스 풍미를 깔끔하게 보완",
    image: "/images/cooking.jpg",
  },
  {
    icon: Croissant,
    label: "베이킹",
    desc: "반죽의 유제품 향을 과하지 않게 정리",
    image: null,
  },
];

const fitPersons = [
  '우유 특유의 "텁텁함"보다 깔끔한 마무리를 선호하는 분',
  "매일 1~2잔 이상 마셔서 질리지 않는 우유를 찾는 분",
  "라떼/시리얼/요리에 한 제품으로 다 쓰는 실용성을 원하는 분",
];

export function TasteSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Taste & Texture
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            맛 / 식감 / 향
          </h2>
        </div>

        {/* Taste description blocks */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-border/60 bg-background p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 font-serif">
              첫 모금에서 느껴지는 인상
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              담백하게 시작해 고소함이 자연스럽게 올라오고, 끝맛은 깔끔하게
              떨어지는 타입입니다. 진하게 &ldquo;쨍한 단맛&rdquo;보다는 매일
              마시기 편안한 밸런스에 가까워요.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 font-serif">
              {'식감(바디감) 설명'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              너무 묽지도, 지나치게 무겁지도 않은 중간 바디감으로, 단독 음용은
              물론 음료/요리에서 활용하기 좋습니다. 커피와 섞었을 때 우유가 튀지
              않고 고소한 향을 받쳐주는 느낌을 기대할 수 있어요.
            </p>
          </div>
        </div>

        {/* Fit for */}
        <div className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 font-serif text-center">
            이런 분들께 특히 잘 맞아요
          </h3>
          <ul className="flex flex-col gap-4 max-w-lg mx-auto">
            {fitPersons.map((person, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{person}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Usage cards */}
        <h3 className="text-xl font-bold text-foreground mb-8 font-serif text-center">
          권장 용도
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {usages.map((usage, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background p-5 text-center transition-all hover:shadow-md hover:border-primary/30 overflow-hidden"
            >
              {usage.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Image
                    src={usage.image || "/placeholder.svg"}
                    alt={usage.label}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <usage.icon className="h-5 w-5" />
              </div>
              <p className="relative z-10 text-sm font-bold text-foreground">
                {usage.label}
              </p>
              <p className="relative z-10 text-xs text-muted-foreground leading-relaxed">
                {usage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
