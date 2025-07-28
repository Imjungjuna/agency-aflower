import { Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DeliverySchedule() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">배송 일정 및 시간 안내</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            유연한 배송 일정 옵션으로 꽃 배송을 계획하세요. 최적의 신선도를 위해 지역별로 순차 배송됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Available Delivery Dates */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <Calendar className="w-5 h-5 mr-2" />
                배송 가능 날짜
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">현재 배송 가능 날짜:</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                      <div className="text-lg font-bold text-blue-600">5월 6일</div>
                      <div className="text-sm text-gray-600">월요일</div>
                      <div className="text-xs text-green-600 mt-1">배송가능</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                      <div className="text-lg font-bold text-blue-600">5월 7일</div>
                      <div className="text-sm text-gray-600">화요일</div>
                      <div className="text-xs text-green-600 mt-1">배송가능</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                      <div className="text-lg font-bold text-blue-600">5월 8일</div>
                      <div className="text-sm text-gray-600">수요일</div>
                      <div className="text-xs text-green-600 mt-1">배송가능</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-yellow-800">중요 안내</h5>
                    <p className="text-sm text-yellow-700">
                      시간 지정은 불가능합니다. 최적의 꽃 신선도를 위해 지역별로 순차 배송이 진행됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Process */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <Clock className="w-5 h-5 mr-2" />
                배송 프로세스
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">주문 확인</h5>
                    <p className="text-sm text-gray-600">주문이 확인되고 배송일에 신선하게 준비됩니다</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">지역별 순차 배송</h5>
                    <p className="text-sm text-gray-600">효율적이고 신선한 배송을 위해 지역별로 배송이 조직됩니다</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">안전한 운송</h5>
                    <p className="text-sm text-gray-600">온도 조절이 가능한 전문 차량으로 배송</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">배송 완료</h5>
                    <p className="text-sm text-gray-600">신선한 꽃이 지정된 주소로 안전하게 배송됩니다</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Time Guidelines */}
        <div className="mt-12 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-center">배송 시간 안내</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">오전 배송</h4>
              <p className="text-sm text-gray-600">
                오전 9시 - 오후 12시
                <br />
                우선 지역 및 긴급 주문
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">오후 배송</h4>
              <p className="text-sm text-gray-600">
                오후 12시 - 오후 5시
                <br />
                일반 배송 시간
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">저녁 배송</h4>
              <p className="text-sm text-gray-600">
                오후 5시 - 오후 7시
                <br />
                마지막 배송 시간
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
