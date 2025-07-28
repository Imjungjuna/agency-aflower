import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Users, Award, Leaf, Heart, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                사랑과 꽃이 만나는 이야기
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                9년이 넘는 시간 동안 A FLOWER는 단순한 꽃집을 넘어서는 존재였습니다. 우리는 플로리스트 예술을 통해 서울
                지역사회에 아름다움, 기쁨, 의미 있는 연결을 가져오는 가족 비즈니스입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-around items-center">
              <div className="lg:px-5 break-keep">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">시작의 이야기</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  2015년 작은 꿈으로 시작된 것이 서울에서 가장 사랑받는 동네 꽃집으로 꽃피웠습니다. 창업주 ooo는 간단한
                  비전으로 시작했습니다: 이야기를 전하고 인생의 소중한 순간을 축하하는 아름답고 지속 가능한 꽃다발을
                  만드는 것입니다.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  정자동의 작은 상점에서 시작하여 지역사회에서 신뢰받는 이름으로 성장했습니다. 우리가 만드는 모든
                  꽃다발은 품질, 지속가능성, 그리고 각각의 꽃다발을 독특하게 만드는 개인적인 터치에 대한 우리의 약속을
                  이어갑니다.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  오늘날 A FLOWER는 2세대 가족 비즈니스가 된 것을 자랑스럽게 생각하며, 늘 그랬듯이 핵심 가치인 장인정신,
                  지역사회, 환경 보호를 유지하면서 새로운 추억과 선물을 고객들에게 안겨드리고자 합니다.
                </p>

                {/* Values */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">수작업</div>
                      <div className="text-sm text-gray-600">사랑과 정성으로</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">지속가능</div>
                      <div className="text-sm text-gray-600">친환경 실천</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">지역사회</div>
                      <div className="text-sm text-gray-600">지역 파트너십</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">우수성</div>
                      <div className="text-sm text-gray-600">프리미엄 품질</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full max-w-md h-80 md:h-96 lg:h-120 rounded-3xl overflow-hidden flex mx-auto items-center justify-center">
                <Image src="/frontView.jpg" alt="A FLOWER" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">창업주를 소개합니다</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A FLOWER의 시작과 성장을 이끌어온 창업주 박 여사의 이야기입니다.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">사장님 사진</p>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-playfair">박00</h3>
                  <p className="text-rose-600 font-medium mb-4 text-lg">창업주 & 마스터 플로리스트</p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    15년 이상의 플로리스트 경험을 바탕으로 전통적인 한국 꽃 예술을 현대적인 꽃다발에 접목시켜 독특한
                    스타일을 만들어왔습니다. 각 꽃다발에는 단순한 장식이 아닌 의미와 감정이 담겨있습니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;꽃은 말을 하지 않지만, 모든 것을 말해줍니다&rdquo;라는 신념으로 매일 아침 신선한 꽃들을
                    정성스럽게 다듬으며 고객들의 특별한 순간을 위한 완벽한 꽃다발을 만들어갑니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    지역사회와의 깊은 연결을 중요시하며, 지속가능한 꽃 재배 방식을 통해 환경 보호에도 기여하고 있습니다.
                    9년째 초심을 잃지 않고 새로운 도전을 이어가며 A FLOWER의 미래를 그려나가고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2 font-playfair">10,000+</div>
                <div className="text-gray-600">행복한 고객</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2 font-playfair">9+</div>
                <div className="text-gray-600">서비스 연차</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2 font-playfair">500+</div>
                <div className="text-gray-600">웨딩 서비스</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2 font-playfair">100%</div>
                <div className="text-gray-600">만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">매장 방문</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  분당구 중심에 위치한 우리의 아름다운 매장은 신선한 계절 꽃들과 달콤한 꽃향기로 가득합니다. 직접
                  꽃다발을 보시고 친근한 팀을 만나보러 오세요.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-rose-600" />
                    <span className="text-gray-700">
                      경기도 성남시 분당구 성남대로 393, 분당두산위브파빌리온 상가 A동
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-rose-600" />
                    <div>
                      <div className="text-gray-700">평일: 09:00 - 20:00</div>
                      <div className="text-gray-700">토요일: 09:00 - 18:00, 일요일: 10:00 - 17:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">매장 내부 이미지</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
