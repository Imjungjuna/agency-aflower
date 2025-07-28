import { Shield, RefreshCw, Phone, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DeliveryPolicies() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">배송 정책 및 약관</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            최고의 서비스를 제공하고 고객님이 정확히 무엇을 기대할 수 있는지 알 수 있도록 하는 포괄적인 배송 정책입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delivery Guarantee */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <Shield className="w-5 h-5 mr-2" />
                배송 보장
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">저희의 약속:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 배송 시 신선한 꽃 보장</li>
                  <li>• 전문적인 취급 및 운송</li>
                  <li>• 온도 조절 차량 배송</li>
                  <li>• 손상 방지를 위한 세심한 포장</li>
                  <li>• 배송 확인 및 추적</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-sm text-gray-600">
                  <strong>품질 보증:</strong> 꽃이 손상되어 도착하거나 저희 품질 기준에 미치지 못할 경우, 추가 비용 없이
                  교체해드리거나 전액 환불해드립니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation & Returns */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <RefreshCw className="w-5 h-5 mr-2" />
                취소 및 반품
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">취소 정책:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 배송 24시간 전까지 무료 취소</li>
                  <li>• 24시간 이내 취소 시 50% 환불</li>
                  <li>• 당일 취소는 환불 불가</li>
                  <li>• 응급 취소는 개별 검토</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">반품 정책:</h4>
                <p className="text-sm text-gray-600">
                  신선한 꽃의 특성상 품질 문제나 배송 오류에 대해서만 반품이 가능합니다. 배송 후 2시간 이내에 연락주시면
                  즉시 해결해드립니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Restrictions */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <AlertTriangle className="w-5 h-5 mr-2" />
                배송 제한사항
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">참고사항:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 시간 지정 배송 불가</li>
                  <li>• 기상 조건에 따라 배송 일정 변경 가능</li>
                  <li>• 원거리 지역은 추가 배송 시간 소요</li>
                  <li>• 아파트 단지는 수령인 직접 수령 필요할 수 있음</li>
                  <li>• 사업장 배송은 영업시간 내에만 가능</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <p className="text-sm text-gray-600">
                  <strong>중요:</strong> 배송을 받을 수 있는 분이 계시는지 확인해주세요. 부재 시 대안 방법을 위해
                  연락드립니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Issues */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                배송 지원
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">도움이 필요하신가요?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  배송 관련 문의사항이나 문제가 있으시면 저희 배송 지원팀이 도와드리겠습니다.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="font-medium">전화:</span>
                    <span className="ml-2">+82-2-1234-5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium">운영시간:</span>
                    <span className="ml-2">월-토 9시-19시, 일 10시-17시</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-1">긴급 배송 문제</h5>
                <p className="text-sm text-gray-600">
                  배송 당일 긴급한 배송 문제가 있으시면 즉시 전화주세요. 신속하게 문제를 해결하여 꽃이 목적지에
                  도착하도록 하겠습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Terms */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-center">추가 약관 및 조건</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">배송 주소 요구사항</h4>
              <ul className="space-y-1">
                <li>• 정확하고 완전한 주소 필요</li>
                <li>• 아파트/호수 번호 포함</li>
                <li>• 수령인 연락처 정보 제공</li>
                <li>• 특별 배송 지시사항 환영</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">기상 및 불가항력</h4>
              <ul className="space-y-1">
                <li>• 악천후로 인한 배송 지연 가능</li>
                <li>• 대체 배송일 제공</li>
                <li>• 기상 지연에 대한 추가 요금 없음</li>
                <li>• 배송팀 안전이 최우선</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">결제 및 가격</h4>
              <ul className="space-y-1">
                <li>• 결제 시 배송비 계산</li>
                <li>• 배송 전 결제 완료 필요</li>
                <li>• 가격은 예고 없이 변경될 수 있음</li>
                <li>• 특별 배송 요청 시 추가 요금 발생 가능</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">개인정보 및 보안</h4>
              <ul className="space-y-1">
                <li>• 수령인 정보 기밀 유지</li>
                <li>• 배송 확인을 위한 사진 촬영 가능</li>
                <li>• 개인정보보호정책에 따른 개인정보 보호</li>
                <li>• 안전한 결제 처리 보장</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
