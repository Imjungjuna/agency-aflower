"use client";

import type React from "react";
import Link from "next/link";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  //   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // toast({
    //   title: "Message sent!",
    //   description: "We'll get back to you within 24 hours.",
    // });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">문의하기</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              궁금한 점이 있으신가요? 주문, 맞춤 꽃다발, 행사 문의 등 언제든 편하게 연락해 주세요.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">문의 메세지 보내기</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        연락처
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="연락처를 입력하세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      제목 *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="문의 내용을 입력하세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      메세지 *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="궁금하신 내용을 남겨주세요."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    <Send className="w-4 h-4 mr-2" />
                    메세지 보내기
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">연락처 안내</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">전화번호</h3>
                        <p className="text-gray-600">031-603-1300</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">카카오톡 플러스친구</h3>
                        <p className="text-gray-600">@에이플라워</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">인스타그램</h3>
                        <p className="text-gray-600">@aflowerkorea</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 font-playfair">빠른 문의</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      급한 주문이나 당일 배송 문의는 전화 또는 카카오톡 플러스친구로 연락해 주세요.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Link href="tel:0316031300" className="w-1/2 h-10">
                        <Button className="btn-primary w-full h-full">
                          <Phone className="w-4 h-4 mr-2" />
                          전화 문의의
                        </Button>
                      </Link>
                      <Link href="https://pf.kakao.com/_yXiqxl" className="w-1/2 h-10">
                        <Button variant="outline" className="size-full btn-secondary h-10 bg-transparent">
                          <Mail className="w-4 h-4 mr-2" />
                          카카오톡 채널
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
