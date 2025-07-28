import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";

// 리뷰 수가 가장 많은 상위 4개 제품
const featuredProducts = [
  {
    id: "12",
    name: "웨딩/촬영부케",
    price: 100000,
    image: "/products/weddingBouquet.jpg",
    rating: 4.9,
    reviews: 203,
    badge: "인기 1위",
    description:
      "웨딩 본식or촬영때 쓰시는 부케입니다 금액은 10~30만원 설정가능하며 원하시는 디자인과 꽃에 따라서 금액변동 됩니다.",
  },
  {
    id: "3",
    name: "꽃다발 (M)",
    price: 70000,
    image: "/products/bouquet_medium.jpg",
    rating: 4.9,
    reviews: 156,
    badge: "베스트셀러",
    description: "중간 사이즈의 꽃다발로 결혼기념일, 생일 등 특별한 날에 선물하기 좋은 사이즈입니다.",
  },
  {
    id: "10",
    name: "용돈박스",
    price: 70000,
    image: "/products/moneyBox.jpg",
    rating: 4.7,
    reviews: 156,
    badge: "많이 찾는",
    description: "용돈과 함께 선물하실 수 있는 플라워박스입니다 지폐는 10-20장까지 넣으실 수 있습니다.",
  },
  {
    id: "11",
    name: "기프트박스",
    price: 100000,
    image: "/products/giftBox.jpg",
    rating: 4.8,
    reviews: 134,
    badge: "프리미엄",
    description: "꽃과 선물을 함께 선물하실 수 있는 기프트박스입니다 10만원~15만원 금액설정 가능합니다.",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">인기 상품</h2>
          <p className="text-gray-600 max-w-2xl mx-auto break-keep">
            에이플라워는 전문 플로리스트가 운영하는 플라워샵 & 아카데미 입니다. 모든 상품은 고퀄리티 수입 생화를 이용한
            세련되고 고급스러운 플로랄 디자인으로 제작해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-101 transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4 text-gray-600 hover:text-rose-500 transition-colors" />
              </button>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 break-keep line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">₩{product.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/product/${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      자세히 보기
                    </Button>
                  </Link>
                  <Button className="btn-primary">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <Button size="lg" className="btn-primary">
              모든 상품 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
