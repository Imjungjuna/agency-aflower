import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DeliveryZones } from "@/components/delivery/delivery-zones";
import { DeliveryFAQ } from "@/components/delivery/delivery-faq";
import { LocationParkingInfo } from "@/components/delivery/location-parking-info";
import { Clock, MapPin, Shield } from "lucide-react";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50 break-keep">
          <div className="container mx-auto px-4 break-keep">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">배송 안내</h1>
              <p className="text-base md:text-xl text-gray-600 mb-8">
                서울 및 경기도 전 지역 안전하고 신뢰할 수 있는 꽃 배송 서비스. 신선한 꽃을 정성스럽게 문앞까지
                배송해드립니다.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-2 md:gap-6 break-keep">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 md:size-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="size-6 md:size-8 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">넓은 배송 지역</h3>
                  <p className="text-sm text-gray-600">서울 및 경기 지역</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 md:size-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="size-6 md:size-8 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">유연한 배송일</h3>
                  <p className="text-sm text-gray-600">다양한 날짜 선택 가능</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 md:size-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="size-6 md:size-8 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">안전한 운송</h3>
                  <p className="text-sm text-gray-600">세심한 취급 보장</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Zones */}
        <DeliveryZones />

        {/* Location & Parking Information */}
        <LocationParkingInfo />

        {/* FAQ Section */}
        <DeliveryFAQ />
      </main>

      <Footer />
    </div>
  );
}
