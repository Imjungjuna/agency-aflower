"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-rose-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +82-2-1234-5678
            </span>
            <span>Same-day delivery available</span>
          </div>
          <div className="hidden md:block">Free delivery on orders over ₩50,000</div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-white.png" alt="AFLOWER 로고" width={64} height={64} className="size-12 rounded-full" />
            <p>A FLOWER</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
              소개
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-rose-600 transition-colors">
              스토어
            </Link>
            <Link href="/delivery" className="text-gray-700 hover:text-rose-600 transition-colors">
              배송 안내
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors">
              블로그
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
              연락처
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-rose-600 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-rose-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-rose-600 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
                About
              </Link>
              <Link href="/delivery" className="text-gray-700 hover:text-rose-600 transition-colors">
                Delivery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
