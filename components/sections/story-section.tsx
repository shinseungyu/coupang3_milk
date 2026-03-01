export function StorySection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-card">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            매일일수록 더 까다로워야 할 이유
          </h2>
        </div>

        <article className="prose prose-lg max-w-none">
          {/* Story 1 */}
          <div className="mb-12">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              왜 &lsquo;우유&rsquo;는 매일일수록 더 까다로워야 할까요
            </h3>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                우유는 특별한 날만 먹는 제품이 아니라, 아침·간식·커피·요리 등
                생활 곳곳에 들어갑니다.
              </p>
              <p>
                그래서 한 번의 선택이 아니라 반복되는 선택이 됩니다. 반복되는
                선택일수록 중요한 건, 과장된 문구가 아니라 라벨로 확인 가능한
                정보와 일관된 관리 기준입니다.
              </p>
              <p>
                이 페이지는 바로 그 관점에서, 유기농 우유를 맛/원재료/품질
                중심으로 깊게 정리했습니다.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-border" />
            <span className="text-primary font-serif text-sm">
              ···
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Story 2 */}
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              맛은 취향, 정보는 기준
            </h3>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                &ldquo;맛있다&rdquo;는 개인차가 있지만, 원재료/인증/보관은
                확인 가능한 기준입니다.
              </p>
              <p>
                그래서 우리는 맛 표현을 과장하지 않고, 대신 구매 전 필요한
                정보를 풍부하게 제공하는 방식으로 신뢰를 만들고자 합니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
