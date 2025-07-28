"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/shop/product-grid";
import { ProductFilters } from "@/components/shop/product-filters";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState<{
    occasion: string[];
    priceRange: number[];
    size: string[];
    color: string[];
  }>({
    occasion: [],
    priceRange: [0, 100000],
    size: [],
    color: [],
  });

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">신선한 꽃 구매하기</h1>
            <p className="text-gray-600 max-w-2xl">
              플로리스트가 정성스럽게 만든 꽃다발, 계절별 꽃꽂이, 맞춤형 플라워 디자인을 만나보세요. 모든 꽃은 지역에서
              신선하게 공수하여 사랑을 담아 제작합니다.
              <br />
              *꽃 송이 수는 시장상황에 따라서 변동될 수 있습니다
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="sm:hidden">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">View:</span>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
              <ProductFilters filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <ProductGrid filters={filters} viewMode={viewMode} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
