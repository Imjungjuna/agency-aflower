import { MapPin, Truck, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DeliveryZones() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">배송 가능 지역</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            서울 및 경기도 전 지역에 퀵 배송 서비스를 제공합니다. 모든 상품은 차량으로 안전하게 운송되어 꽃이 완벽한
            상태로 도착하도록 보장합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Coverage Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">서울 및 경기 배송 지역 지도</h3>
              <p>인터랙티브 배송 지역 지도가 여기에 표시됩니다</p>
              <div className="mt-4 text-sm">
                <p className="font-medium text-gray-700">배송 가능 지역:</p>
                <p>• 서울 전 지역 (25개 구)</p>
                <p>• 경기도 전 지역</p>
                <p>• 수도권 인근 지역</p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-6">
            <Card className="border-rose-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-rose-600">
                  <Truck className="w-5 h-5 mr-2" />퀵 배송 서비스
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  모든 상품은 서울 및 경기도 전 지역에 차량으로 안전하게 배송됩니다. 전문 배송팀이 꽃이 신선하고
                  아름다운 상태로 도착하도록 보장합니다.
                </p>
                <div className="bg-rose-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">서비스 특징:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 전문 차량 배송</li>
                    <li>• 온도 조절 운송</li>
                    <li>• 섬세한 꽃 배치 세심한 취급</li>
                    <li>• 실시간 배송 추적</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-green-600">
                  <Calculator className="w-5 h-5 mr-2" />
                  배송비 안내
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">정자동 지역</h4>
                      <p className="text-sm text-gray-600">기본 배송 지역</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">5,000원</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">정자동 이외 서울/경기 지역</h4>
                      <p className="text-sm text-gray-600">거리에 따른 맞춤 요금</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-blue-600">퀵비 확인 후 안내</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>참고사항:</strong> 정자동 이외 지역의 배송비는 퀵비 확인 후 주문 처리 전에 안내드립니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
