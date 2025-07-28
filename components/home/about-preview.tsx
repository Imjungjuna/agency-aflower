import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Award, Leaf, Heart } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-around items-center">
          <div className="lg:px-5 break-keep">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">시작의 이야기</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              2015년 작은 꿈으로 시작된 것이 서울에서 가장 사랑받는 동네 꽃집으로 꽃피웠습니다. 창업주 ooo는 간단한
              비전으로 시작했습니다: 이야기를 전하고 인생의 소중한 순간을 축하하는 아름답고 지속 가능한 꽃다발을 만드는
              것입니다.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              정자동의 작은 상점에서 시작하여 지역사회에서 신뢰받는 이름으로 성장했습니다. 우리가 만드는 모든 꽃다발은
              품질, 지속가능성, 그리고 각각의 꽃다발을 독특하게 만드는 개인적인 터치에 대한 우리의 약속을 이어갑니다.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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

            <Link href="/about">
              <Button size="lg" className="btn-primary">
                더 알아보기
              </Button>
            </Link>
          </div>
          <div className="relative w-full max-w-md h-80 md:h-96 lg:h-120 rounded-3xl overflow-hidden flex mx-auto items-center justify-center mt-8 lg:mt-0">
            <Image src="/frontView.jpg" alt="A FLOWER" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
