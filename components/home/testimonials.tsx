import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "안겸댕",
    role: "꽃다발 구매",
    content:
      "급하게 전날에 예약하고 다음날 찾았는데, 원하는 튤립이 없엇으나 거베라라는 예쁜 대체 꽃으로 추천해주셔서 했습니다. 튤립만큼 크고 이쁜 꽃이라서 받으시는 분도 감동받으셧어요 ^^ 다음에 또 방문하겠습니다.!",
    rating: 5,
    image: "/logo-transparent.png",
  },
  {
    id: 2,
    name: "쇼오깅",
    role: "선물용 꽃다발",
    content:
      "누구에게, 어떤상황에서 주는 선물인지, 그리고 그에 맞춰 준비해주시는 섬세함. 이런 분들이 꽃을 다루는 거구나, 싶었습니다. 영하의 날씨에도 꼼꼼하게 포장해주신 덕분에 전혀 문제없이 꽃이 주인에게 잘 갔답니다 ◕‿◕ 꽃도 꽃이지만 포장도 너무 이쁘다며 좋아하던 모습을 보며, 제가 이 꽃집을 고생(?)해서 간 보람이 있었어요!",
    rating: 5,
    image: "/logo-transparent.png",
  },
  {
    id: 3,
    name: "하느드레",
    role: "꽃다발 구매",
    content:
      "사장님이 너무너무 친절하셨어요! 가격에 비해 꽃 양이 조금 아쉽지만, 꽃 조합이 예뻤고, 예약 때 미리 부탁드린 컬러로 해주셨습니다! 꽃이 상할까 걱정했는데 싱싱해서 오래갈 것 같아용 담에도 예약하고 싶습니당",
    rating: 4,
    image: "/logo-transparent.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">고객님들의 이야기</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A FLOWER를 선택해주신 고객님들의 소중한 후기입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-rose-300 mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed break-keep">{testimonial.content}</p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-rose-50">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
