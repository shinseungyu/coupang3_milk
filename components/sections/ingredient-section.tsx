import { AlertTriangle } from "lucide-react";

const ingredientTable = [
  { label: "주원료", value: "유기농 원유" },
  { label: "원유 원산지", value: "제품 표기 기준 확인" },
  { label: "기타 원재료", value: "해당 시 표기된 원재료 기준" },
  { label: "알레르기", value: "우유 함유" },
];

const checkpoints = [
  {
    label: "원유 함량",
    desc: "제품 표기 기준으로 확인 (예: 원유 100% 여부 등)",
  },
  {
    label: "살균 방식",
    desc: "저온/고온 등 제품별 상이 → 표기 기준 안내 권장",
  },
  {
    label: "가공/첨가물",
    desc: '"무첨가" 같은 표현은 라벨 근거가 있을 때만 사용 권장',
  },
];

export function IngredientSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Ingredients
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            원재료 / 원유 정보
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredient Table */}
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <h3 className="text-lg font-bold text-foreground mb-6 font-serif">
              원재료 한눈에 보기
            </h3>
            <div className="flex flex-col gap-0">
              {ingredientTable.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-4 border-b border-border/40 last:border-b-0"
                >
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted-foreground text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-lg bg-accent/10 p-3">
              <AlertTriangle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <p className="text-xs text-accent leading-relaxed">
                알레르기 유발 성분(우유) 포함 — 반드시 확인해 주세요.
              </p>
            </div>
          </div>

          {/* Why Organic */}
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <h3 className="text-lg font-bold text-foreground mb-6 font-serif">
              &ldquo;유기농&rdquo;을 선택하는 이유
            </h3>
            <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                유기농 우유는 단순히 &lsquo;몸에 좋다&rsquo;는 감성 문구가
                아니라, 사료·사육·원유 관리에 대한 기준과 인증 체계를 기반으로
                합니다.
              </p>
              <p>
                그래서 매일 마시는 우유일수록, 원유의 관리 기준을 중요하게 보는
                분들이 많습니다.
              </p>
              <p>
                이 제품은 그런 니즈를 위해 유기농 기준에 기반한 원유를 전면에 둔
                구성을 목표로 했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Checkpoints */}
        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="text-lg font-bold text-foreground mb-6 font-serif">
            원유 관련 체크포인트
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {checkpoints.map((cp, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-sm font-bold text-foreground">
                  {cp.label}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {cp.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
