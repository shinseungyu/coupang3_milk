import { ShieldCheck, Factory, Truck, Quote } from "lucide-react";

const processes = [
  {
    icon: ShieldCheck,
    label: "원유 관리",
    desc: "유기농 기준에 기반한 원유 수급 및 관리 (제품 고지 기준)",
  },
  {
    icon: Factory,
    label: "생산 관리",
    desc: "위생/공정 기준에 따른 제조 프로세스 운영 (인증/표시 기준)",
  },
  {
    icon: Truck,
    label: "유통 관리",
    desc: "냉장 보관·유통 조건 준수 안내 (구매 후 보관까지 포함)",
  },
];

export function CertificationSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Quality & Trust
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            인증 / 검사 / 품질
          </h2>
        </div>

        {/* Certification Info */}
        <div className="rounded-2xl border border-border/60 bg-background p-8 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4 font-serif">
            {'인증(있는 경우에만 적용)'}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            본 제품은 유기농 관련 인증, HACCP 등 위생 관련 인증/관리 표시 등
            제품 고지에 따른 인증/관리 정보를 기반으로 안내합니다.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            인증은 &ldquo;좋다/안전하다&rdquo;를 과장하기 위한 장식이 아니라,
            기준을 통과했음을 확인하는 표식입니다.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {processes.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-border/60 bg-background p-8 text-center"
            >
              {idx < processes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-7 w-7" />
              </div>
              <p className="text-sm font-bold text-foreground mb-2">
                {step.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency Quote */}
        <div className="rounded-2xl bg-primary p-8 md:p-12 text-center relative overflow-hidden">
          <Quote className="absolute top-4 left-4 h-16 w-16 text-primary-foreground/10" />
          <p className="relative z-10 text-primary-foreground text-lg md:text-xl font-serif leading-relaxed max-w-2xl mx-auto">
            좋은 우유는 &lsquo;말&rsquo;보다 &lsquo;정보&rsquo;로 증명된다고
            믿습니다.
            <br className="hidden md:block" />
            그래서 이 페이지는 원재료·관리·보관 정보를 최대한 자세히
            담았습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
