"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "정확한 배송 시간을 지정할 수 있나요?",
    answer:
      "죄송하지만 시간 지정 배송은 불가능합니다. 최적의 꽃 신선도를 위해 지역별로 순차 배송을 진행합니다. 배송 가능 날짜(5월 6-8일) 중에서 선택하실 수 있으며, 일반 배송 시간대에 배송됩니다.",
  },
  {
    question: "우리 지역 배송비는 얼마인가요?",
    answer:
      "정자동 지역은 5,000원입니다. 서울 및 경기도 기타 지역은 거리에 따라 배송비가 계산되며, 주문 처리 전에 확인해드립니다. 결제 시 정확한 배송비를 안내받으실 수 있습니다.",
  },
  {
    question: "배송 시 집에 아무도 없으면 어떻게 되나요?",
    answer:
      "배송팀이 제공된 전화번호로 연락드립니다. 부재 시 이웃에게 대신 받아달라고 요청하거나(고객님 동의 하에) 다른 시간으로 재배송을 조율할 수 있습니다.",
  },
  {
    question: "주말이나 공휴일에도 배송하나요?",
    answer:
      "네, 정규 운영시간 내에 주말 배송이 가능합니다. 공휴일 배송은 해당 공휴일에 따라 가능 여부가 달라집니다. 공휴일 배송을 원하시면 미리 연락주세요.",
  },
  {
    question: "배송 중 꽃의 신선도는 어떻게 보장하나요?",
    answer:
      "모든 꽃은 온도 조절이 가능한 차량으로 적절한 포장과 함께 운송됩니다. 전문급 꽃 상자와 수분 공급원을 사용하여 신선도를 유지합니다. 운송 시간을 최소화하기 위해 지역별로 배송을 조직합니다.",
  },
  {
    question: "배송 추적이 가능한가요?",
    answer:
      "네, 배송 추적 서비스를 제공합니다. 주문 준비 완료, 배송 출발, 배송 완료 시 업데이트를 받으실 수 있습니다. 배송 문제가 있을 경우에도 저희 팀이 연락드립니다.",
  },
  {
    question: "꽃이 손상되어 도착하면 어떻게 하나요?",
    answer:
      "꽃이 손상되어 도착하거나 품질 기준에 미치지 못할 경우, 배송 후 2시간 이내에 연락주세요. 고객님의 선택에 따라 무료로 교체해드리거나 전액 환불해드립니다.",
  },
  {
    question: "주문 후 배송 주소를 변경할 수 있나요?",
    answer:
      "배송 예정일 24시간 전까지는 주소 변경이 가능합니다. 가능한 한 빨리 연락주세요. 당일 주소 변경은 배송 일정에 따라 불가능할 수 있습니다.",
  },
];

export function DeliveryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">자주 묻는 질문</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            배송 서비스에 대한 일반적인 질문에 대한 답변입니다. 찾으시는 내용이 없으시면 고객지원팀에 문의해주세요.
          </p>
        </div>

        <div className="max-w-3xl mx-auto break-keep">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-sm md:text-lg text-gray-900">{faq.question}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="pl-0 text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">추가 문의사항이 있으신가요?</h3>
            <p className="text-gray-600 mb-6 text-base">
              친절한 고객서비스팀이 배송 관련 문의나 특별 요청사항에 대해 도움을 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
              <a href="tel:+82-2-1234-5678" className="btn-primary inline-flex items-center justify-center">
                지금 전화하기
              </a>
              <a href="/contact" className="btn-secondary inline-flex items-center justify-center bg-transparent">
                메시지 보내기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
