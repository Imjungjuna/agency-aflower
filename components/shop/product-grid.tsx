"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
// import { useToast } from "@/hooks/use-toast";
import { Star, Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: "1",
    name: "꽃다발 (S)",
    price: 30000,
    image: "/products/bouquet_small.jpg",
    rating: 4.9,
    reviews: 127,
    occasion: ["Anniversary", "Birthday"],
    size: "Small",
    color: "Mixed",
    description: "부담없이 선물하기 좋은 사이즈의 작은 꽃다발입니다 :)",
  },
  {
    id: "2",
    name: "꽃다발 (기본)",
    price: 50000,
    image: "/products/bouquet_basic.jpg",
    rating: 4.8,
    reviews: 89,
    occasion: ["Birthday", "Just Because"],
    size: "Basic",
    color: "Mixed",
    description: "기본적으로 가장 많이 주문해주시는 사이즈의 꽃다발입니다 단체행사, 승진 축하 꽃다발 등에 추천드려요.",
  },
  {
    id: "3",
    name: "꽃다발 (M)",
    price: 70000,
    image: "/products/bouquet_medium.jpg",
    rating: 4.9,
    reviews: 156,
    occasion: ["Wedding", "Anniversary"],
    size: "Medium",
    color: "Mixed",
    description: "중간 사이즈의 꽃다발로 결혼기념일, 생일 등 특별한 날에 선물하기 좋은 사이즈입니다.",
  },
  {
    id: "4",
    name: "꽃다발 (L)",
    price: 100000,
    image: "/products/bouquet_large.jpg",
    rating: 4.7,
    reviews: 94,
    occasion: ["Wedding", "Congratulations"],
    size: "Large",
    color: "Mixed",
    description:
      "큰 사이즈의 꽃다발로 결혼기념일, 생일 등 특별한 날에 선물하기 좋은 사이즈의 고급스럽고 풍성한 꽃다발입니다.",
  },
  {
    id: "5",
    name: "꽃다발 (XL)",
    price: 150000,
    image: "/products/bouquet_extraLarge.jpg",
    rating: 4.8,
    reviews: 112,
    occasion: ["Wedding", "Anniversary"],
    size: "Extra Large",
    color: "Mixed",
    description:
      "프로포즈, 임신/출산축하, 환갑, 칠순 등에 많이 찾으시는 고급스럽고 풍성한 꽃다발 입니다 수입꽃이나 고급꽃 위주로 넣어드려요 :)",
  },
  {
    id: "6",
    name: "꽃다발 (스폐셜)",
    price: 200000,
    image: "/products/bouquet_special.jpg",
    rating: 4.6,
    reviews: 78,
    occasion: ["Wedding", "Special Occasion"],
    size: "Special",
    color: "Mixed",
    description:
      "20만원부터 ~ 50만원까지 금액 설정 가능 특별한 날을 더 특별하게 만들어주는 고급스럽고 풍성한 꽃다발 입니다 원하시는 금액에 맞춰서 사이즈가 달라집니다.",
  },
  {
    id: "7",
    name: "꽃바구니 (기본)",
    price: 70000,
    image: "/products/flowerBasket_basic.jpg",
    rating: 4.7,
    reviews: 95,
    occasion: ["Birthday", "Housewarming"],
    size: "Basic",
    color: "Mixed",
    description: "가볍게 선물하시기 좋은 기본사이즈의 꽃바구니입니다.",
  },
  {
    id: "8",
    name: "꽃바구니 (프리미엄)",
    price: 100000,
    image: "/products/flowerBasket_premium.jpg",
    rating: 4.8,
    reviews: 103,
    occasion: ["Wedding", "Anniversary"],
    size: "Premium",
    color: "Mixed",
    description: "축하선물, 상견례, 첫인사자리 등 어른분들께 선물하실때 많이 주문주시는 꽃바구니 입니다.",
  },
  {
    id: "9",
    name: "꽃바구니 (스폐셜)",
    price: 150000,
    image: "/products/flowerBasket_special.jpg",
    rating: 4.9,
    reviews: 87,
    occasion: ["Wedding", "Special Occasion"],
    size: "Special",
    color: "Mixed",
    description:
      "15만원~30만원 금액 5만원단위로 금액 설정 가능 특별한 날을 더 특별하게 만들어주는 고급스럽고 풍성한 꽃바구니 입니다 원하시는 금액에 맞춰서 사이즈가 달라집니다 :)",
  },
  {
    id: "10",
    name: "용돈박스",
    price: 70000,
    image: "/products/moneyBox.jpg",
    rating: 4.7,
    reviews: 156,
    occasion: ["Wedding", "Birthday"],
    size: "Standard",
    color: "Mixed",
    description: "용돈과 함께 선물하실 수 있는 플라워박스입니다 지폐는 10-20장까지 넣으실 수 있습니다.",
  },
  {
    id: "11",
    name: "기프트박스",
    price: 100000,
    image: "/products/giftBox.jpg",
    rating: 4.8,
    reviews: 134,
    occasion: ["Birthday", "Anniversary"],
    size: "Standard",
    color: "Mixed",
    description:
      "꽃과 선물을 함께 선물하실 수 있는 기프트박스입니다 10만원~15만원 금액설정 가능합니다. *프로포즈반지, 쥬얼리, 화장품, 신발 등 선물과 함께 맞춤으로 제작해드려요 :)",
  },
  {
    id: "12",
    name: "웨딩/촬영부케",
    price: 100000,
    image: "/products/weddingBouquet.jpg",
    rating: 4.9,
    reviews: 203,
    occasion: ["Wedding", "Photography"],
    size: "Wedding",
    color: "Mixed",
    description:
      "웨딩 본식or촬영때 쓰시는 부케입니다 금액은 10~30만원 설정가능하며 원하시는 디자인과 꽃에 따라서 금액변동 됩니다.",
  },
  {
    id: "13",
    name: "트렁크 프러포즈",
    price: 250000,
    image: "/products/trunkPropose.jpg",
    rating: 4.9,
    reviews: 67,
    occasion: ["Proposal", "Special Occasion"],
    size: "Large",
    color: "Mixed",
    description:
      "트렁크에 장식해드리는 프로포즈 꽃장식입니다. 금액 25만원부터 원하시는 디자인에 따라서 금액 변동됩니다. 선물이 있을경우 말씀해주시면 공간 마련해드리며,쓰시기 3시간전 미리 차량을 가져다 주셔야 합니다.",
  },
  {
    id: "14",
    name: "기업결제",
    price: 0,
    image: "/products/companyCustom.jpeg",
    rating: 4.8,
    reviews: 45,
    occasion: ["Corporate", "Business"],
    size: "Custom",
    color: "Mixed",
    description: "기업 고객을 위한 맞춤형 서비스로 특별한 요구사항에 맞는 꽃 서비스를 제공합니다.",
  },
];

interface ProductGridProps {
  filters: {
    occasion: string[];
    priceRange: number[];
    size: string[];
    color: string[];
  };
  viewMode: "grid" | "list";
}

export function ProductGrid({ filters, viewMode }: ProductGridProps) {
  const { addItem } = useCart();
  //   const { toast } = useToast();
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    // Occasion filter
    if (filters.occasion.length > 0) {
      const hasMatchingOccasion = filters.occasion.some((occasion) => product.occasion.includes(occasion));
      if (!hasMatchingOccasion) return false;
    }

    // Price filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Size filter
    if (filters.size.length > 0 && !filters.size.includes(product.size)) {
      return false;
    }

    // Color filter
    if (filters.color.length > 0 && !filters.color.includes(product.color)) {
      return false;
    }

    return true;
  });

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    // toast({
    //   title: "Added to cart",
    //   description: `${product.name} has been added to your cart.`,
    // });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
  };

  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col md:flex-row gap-6"
          >
            <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 font-playfair">{product.name}</h3>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.includes(product.id) ? "text-rose-500 fill-current" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center mb-3">
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
                <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
              </div>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">₩{product.price.toLocaleString()}</span>
                </div>

                <div className="flex gap-2">
                  <Link href={`/product/${product.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Button onClick={() => handleAddToCart(product)} className="btn-primary">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-101 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-row sm:block"
        >
          <div className="relative min-w-[120px] w-32 h-32 sm:w-auto sm:h-64 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Heart
                className={`w-4 h-4 ${wishlist.includes(product.id) ? "text-rose-500 fill-current" : "text-gray-600"}`}
              />
            </button>
          </div>

          <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
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

            <p className="text-sm text-gray-600 mb-4 break-keep">{product.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">₩{product.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link href={`/product/${product.id}`} className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </Link>
              <Button onClick={() => handleAddToCart(product)} className="btn-primary">
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
