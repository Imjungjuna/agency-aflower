import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, FileText, Calendar, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-900">A FLOWER</span>
              <span className="text-gray-600 text-base">(에이플라워)</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-4">보통날을 특별한 하루로 바꾸는 마법</p>
            <p className="text-gray-500 text-sm">전문 플로리스트가 운영하는 플라워샵 & 아카데미</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900 ml-8">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-gray-600 text-base break-keep">
                  경기도 성남시 분당구 성남대로 393, <br /> 두산위브파빌리온 A동 1층
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-gray-600 text-base">031-603-1300</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <div className="text-gray-600 text-base">
                  <div>평일: 09:00 - 20:00</div>
                  <div>토요일: 09:00 - 18:00, 일요일: 10:00 - 17:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900 ml-12">Follow Us</h4>
            <div className="space-y-3">
              <Link
                href="https://www.instagram.com/aflowerkorea/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-base">@aflowerkorea</span>
              </Link>

              <Link
                href="https://m.booking.naver.com/booking/6/bizes/555759?area=bmp&service-target=nmap&theme=place"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-base">예약 (네이버)</span>
              </Link>
              <Link
                href="https://pf.kakao.com/_yXiqxl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-base">카카오톡 채널</span>
              </Link>
              <Link
                href="https://blog.naver.com/aflowerkorea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-base">네이버 블로그</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm">© 2024 A FLOWER. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Rating 4.87 · 리뷰 86개</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
