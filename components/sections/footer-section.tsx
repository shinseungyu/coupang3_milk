import { Info } from "lucide-react";

const notices = [
  "본 페이지는 구매 이해를 돕기 위한 정보 제공용이며, 정확한 성분/인증/보관 정보는 제품 라벨 및 상품 고지를 기준으로 합니다.",
  "맛/식감에 대한 표현은 개인차가 있을 수 있습니다.",
  "알레르기 유발 성분(우유) 포함 여부를 확인해 주세요.",
];

const shortCopies = [
  "매일 마시는 우유, 유기농으로 더 깐깐하게",
  "담백한 시작, 고소한 풍미, 깔끔한 마무리",
  "라떼·시리얼·요리까지 한 번에",
  "원재료 정보 투명하게",
  "인증/품질 기준 한눈에",
  "데일리 루틴에 어울리는 밸런스",
  "우유는 매일이니까",
  "과장 대신 정보로 설명합니다",
  "신선함은 보관이 좌우합니다",
  "고소함이 살아나는 라떼 베이스",
];

export function FooterSection() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Short Copy Banner */}
      <div className="overflow-hidden py-6 border-b border-primary-foreground/10">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...shortCopies, ...shortCopies].map((copy, idx) => (
            <span
              key={idx}
              className="text-sm text-primary-foreground/50 font-medium"
            >
              {copy}
              <span className="ml-8 text-primary-foreground/20">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Notices */}
      <div className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Info className="h-4 w-4 text-primary-foreground/50" />
            <h4 className="text-sm font-bold text-primary-foreground/70 uppercase tracking-wider">
              고지 / 주의 사항
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            {notices.map((notice, idx) => (
              <p
                key={idx}
                className="text-sm text-primary-foreground/40 leading-relaxed pl-6 relative before:content-['·'] before:absolute before:left-2 before:top-0 before:text-primary-foreground/30"
              >
                {notice}
              </p>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
            <p className="text-xs text-primary-foreground/30">
              {'상세페이지 정보 기준 | 제품 라벨 및 제조사 고지 확인 권장'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
