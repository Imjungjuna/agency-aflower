import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Award, Leaf, Heart } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
              A Family Tradition of
              <span className="text-rose-600"> Beautiful Blooms</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For over 9 years, AFLOWER has been Seouls trusted neighborhood florist. What started as a small family
              dream has blossomed into a beloved local institution, bringing joy and beauty to thousands of special
              moments.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe every flower tells a story, and were honored to be part of yours. From intimate proposals to
              grand celebrations, our hand-crafted arrangements speak the language of love, gratitude, and remembrance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Eco-Friendly</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Made with Love</div>
                </div>
              </div>
            </div>

            <Link href="/about">
              <Button size="lg" className="btn-primary">
                Learn Our Story
              </Button>
            </Link>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Florist at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="Fresh flowers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="Happy customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Wedding arrangements"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
