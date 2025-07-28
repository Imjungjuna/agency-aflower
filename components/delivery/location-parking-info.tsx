import { MapPin, Car, Navigation, Clock, Phone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LocationParkingInfo() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">위치 및 주차 안내</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Flower 매장에 방문하시는 고객님들을 위한 상세한 위치 정보와 주차 안내입니다. 편리한 접근과 안전한 주차를
            위해 사전에 확인해 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location Map Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center text-gray-500 mb-6">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-rose-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">매장 위치</h3>
              <p className="text-gray-600">인터랙티브 지도가 여기에 표시됩니다</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">매장 주소</h4>
              <p className="text-gray-700 mb-2">
                성남대로 393
                <br />
                분당두산위브파빌리온 상가 A동
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button variant="outline" size="sm" className="text-xs">
                  <Navigation className="w-3 h-3 mr-1" />
                  길찾기
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  카카오맵
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  네이버맵
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-rose-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">영업시간</h5>
                  <p className="text-sm text-gray-600">
                    평일: 09:00 - 20:00
                    <br />
                    토요일: 09:00 - 18:00
                    <br />
                    일요일: 10:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rose-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">연락처</h5>
                  <p className="text-sm text-gray-600">
                    전화: 02-1234-5678
                    <br />
                    팩스: 02-1234-5679
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Information */}
          <div className="space-y-6">
            <Card className="border-rose-200 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-rose-600">
                  <Car className="w-5 h-5 mr-2" />
                  주차 안내
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-rose-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">건물 내 주차</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 매장 픽업 시 무료주차 2시간까지 가능</li>
                      <li>• 매장 픽업 시 무료주차 확인을 꼭 요청해주세요</li>
                      <li>• 건물 내 주차장 이용</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">갓길 주차</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 성남대로에 갓길주차 후 픽업 가능</li>
                      <li>• 빠른 픽업 서비스</li>
                      <li>• 편리한 접근</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">주차 이용 방법</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. 건물 내 주차 시 매장에서 무료주차 확인을 요청하세요</li>
                      <li>2. 갓길 주차 시 매장에 연락하여 픽업을 안내받으세요</li>
                      <li>3. 매장 픽업 시 무료주차 혜택을 받으실 수 있습니다</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-rose-200">
            <CardContent className="">
              <div className="flex items-center gap-4 justify-center sm:flex-col">
                <div className="flex items-center gap-3 min-w-[120px] justify-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 sm:hidden">영업시간</h3>
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 hidden sm:block">영업시간</h3>
                  <p className="text-sm text-gray-600">
                    평일 09:00-20:00
                    <br />
                    토요일 09:00-18:00
                    <br />
                    일요일 10:00-17:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-blue-200">
            <CardContent className="">
              <div className="flex items-center gap-4 justify-center sm:flex-col">
                <div className="flex items-center gap-3 min-w-[120px] justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 sm:hidden">주차 정보</h3>
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 hidden sm:block">주차 정보</h3>
                  <p className="text-sm text-gray-600">
                    건물 내 주차 2시간 무료
                    <br />
                    갓길 주차 후 픽업
                    <br />
                    매장 픽업 시 무료주차
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200">
            <CardContent className="">
              <div className="flex items-center gap-4 justify-center sm:flex-col">
                <div className="flex items-center gap-3 min-w-[120px] justify-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 sm:hidden">문의하기</h3>
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 hidden sm:block">문의하기</h3>
                  <p className="text-sm text-gray-600">
                    전화: 02-1234-5678
                    <br />
                    팩스: 02-1234-5679
                    <br />
                    이메일: info@aflower.co.kr
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
