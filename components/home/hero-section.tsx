import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Heart, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpeg"
          alt="Beautiful flower arrangements"
          fill
          className="object-cover blur-xs"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-center font-bold break-keep text-white mb-6 leading-[1]">
            모든 특별한 순간이, <br />
            <span className="text-rose-300">사랑으로 엮은 꽃</span>과 함께.
          </h1>
          <p className="text-lg font-medium text-white mb-8 text-center break-keep">
            에이플라워는 전문 플로리스트가 운영하는 9년차 플라워샵 & 아카데미 입니다. 고퀄리티 수입 생화를 이용한
            세련되고 고급스러운 플로랄 디자인으로 더욱 특별한 추억을 전해드릴께요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 mx-auto w-fit">
            <Link href="/shop">
              <Button size="lg" className="btn-primary group hover:scale-103 hover:font-medium">
                상품 구매하기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/60 transition-all duration-300 ease-in-out hover:font-medium"
              >
                에이플라워 소개
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid-cols-1 sm:grid-cols-3 gap-6 hidden md:grid">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-rose-500/80 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">Same-Day Delivery</div>
                <div className="text-sm text-white/80">Order by 2PM</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-rose-500/80 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">Hand-Tied</div>
                <div className="text-sm text-white/80">Custom arrangements</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-rose-500/80 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">Eco-Friendly</div>
                <div className="text-sm text-white/80">Sustainable practices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
