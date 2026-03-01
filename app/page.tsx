import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Header Section */}
      <header className="px-6 py-16 text-center max-w-4xl mx-auto md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          🥛 추천 우유 제품 <span className="text-blue-600">비교 및 구매 가이드</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          커피의 풍미를 살려주는 전문가용 우유부터 온 가족이 넉넉하게 즐기는 대용량까지, 
          용도에 맞는 <span className="font-semibold text-slate-800">남양유업 우유</span>를 선택해 보세요!
        </p>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: 카페마스터 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="bg-amber-50 px-6 py-8 border-b border-amber-100 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-amber-500"></div>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-3 tracking-wide">BEST FOR COFFEE</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">☕ 홈카페의 완성</h2>
              <h3 className="text-lg font-medium text-amber-900">남양유업 카페마스터</h3>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-sm">
                라떼 아트나 진한 커피 풍미를 원하신다면 단연 카페마스터입니다. 일반 우유보다 거품이 조밀하고 고소함이 강해 카페 퀄리티를 집에서도 구현할 수 있습니다.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">핵심 특징</span>
                <p className="text-slate-800 font-medium text-sm flex items-center">
                  <span className="text-green-500 mr-2">✓</span> 스팀 시 유지력이 좋고 고소한 뒷맛
                </p>
              </div>

              <div className="mt-auto flex flex-col items-center">
                <p className="text-sm font-semibold text-slate-500 mb-3 block text-center">제품 상세 보기 및 구매하기 👇</p>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-300">
                  <iframe src="https://coupa.ng/clLhPX" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 맛있는 우유 GT (900ml) */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="bg-blue-50 px-6 py-8 border-b border-blue-100 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3 tracking-wide">DAILY CHOICE</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">🥛 데일리 건강 우유</h2>
              <h3 className="text-lg font-medium text-blue-900">맛있는 우유 GT (900ml)</h3>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-sm">
                가장 익숙하고 깔끔한 맛의 기본 라인입니다. 아침 식사 대용이나 시리얼과 함께 먹기에 가장 적합한 표준 사이즈입니다.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">핵심 특징</span>
                <p className="text-slate-800 font-medium text-sm flex items-center">
                  <span className="text-green-500 mr-2">✓</span> 특허받은 GT 공법으로 잡내 없이 깔끔한 맛
                </p>
              </div>

              <div className="mt-auto flex flex-col items-center">
                <p className="text-sm font-semibold text-slate-500 mb-3 block text-center">제품 상세 보기 및 구매하기 👇</p>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-300">
                   <iframe src="https://coupa.ng/clLhRS" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 가성비 끝판왕: 맛있는 우유 GT 대용량 (2.3L) */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full md:col-span-2 lg:col-span-1">
            <div className="bg-emerald-50 px-6 py-8 border-b border-emerald-100 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-3 tracking-wide">BEST VALUE</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">📦 가성비 끝판왕</h2>
              <h3 className="text-lg font-medium text-emerald-900">맛있는 우유 GT 대용량 (2.3L)</h3>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-sm">
                우유 소비량이 많은 집이라면 2.3L 대용량이 정답입니다. 자주 구매할 번거로움 없이 넉넉한 용량으로 경제적입니다.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">핵심 특징</span>
                <p className="text-slate-800 font-medium text-sm flex items-center">
                  <span className="text-green-500 mr-2">✓</span> 넉넉한 용량, 합리적인 가격대
                </p>
              </div>

              <div className="mt-auto">
                 <p className="text-sm font-semibold text-slate-500 mb-3 block text-center">다양한 옵션 구매하기 👇</p>
                 <div className="grid grid-cols-2 gap-3 justify-items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-300">
                      <iframe src="https://coupa.ng/clLhTu" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-300">
                       <iframe src="https://coupa.ng/clLhTF" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-300">
                       <iframe src="https://coupa.ng/clLhT0" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-300">
                       <iframe src="https://coupa.ng/clLhUh" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-900 py-12 px-6 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
          </p>
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} 우유 가이드. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
