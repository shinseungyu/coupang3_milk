import { Leaf, ShieldCheck, Coffee } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[500px] lg:h-[80vh]">
        <Image
          src="/images/hero-milk.jpg"
          alt="신선한 유기농 우유"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center">
          <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-4 font-medium">
            Organic Milk
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance max-w-3xl mb-4">
            매일 마시는 우유,
            <br />
            그래서 더 깐깐하게 유기농
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            한 잔으로 끝나는 게 아니라, 매일의 루틴이 되는 맛.
            <br className="hidden md:block" />
            원재료·품질·검사 기준을 꼼꼼히 정리해 안심 포인트를 한눈에 확인할 수 있어요.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground">
              <Leaf className="h-4 w-4" />
              유기농 원유 기반
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground">
              <ShieldCheck className="h-4 w-4" />
              품질/검사 기준 안내
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground">
              <Coffee className="h-4 w-4" />
              {'다용도(라떼·시리얼·요리)'}
            </span>
          </div>

          <p className="mt-6 text-primary-foreground/60 text-xs md:text-sm">
            {'라떼를 자주 마시거나, 아이/가족용으로 매일 소비하는 우유를 찾는 분께 추천'}
          </p>
        </div>
      </div>
    </section>
  );
}
