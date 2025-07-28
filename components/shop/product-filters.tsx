"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ProductFiltersProps {
  filters: {
    occasion: string[];
    priceRange: number[];
    size: string[];
    color: string[];
  };
  onFiltersChange: (filters: ProductFiltersProps["filters"]) => void;
}

export function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const handleOccasionChange = (occasion: string, checked: boolean) => {
    const newOccasions = checked ? [...filters.occasion, occasion] : filters.occasion.filter((o) => o !== occasion);

    onFiltersChange({ ...filters, occasion: newOccasions });
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    const newSizes = checked ? [...filters.size, size] : filters.size.filter((s) => s !== size);

    onFiltersChange({ ...filters, size: newSizes });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const newColors = checked ? [...filters.color, color] : filters.color.filter((c) => c !== color);

    onFiltersChange({ ...filters, color: newColors });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4 font-playfair">Filters</h3>

      <Accordion type="multiple" defaultValue={["occasion", "price", "size", "color"]}>
        <AccordionItem value="occasion">
          <AccordionTrigger>Occasion</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {["Birthday", "Wedding", "Anniversary", "Sympathy", "Congratulations", "Just Because"].map((occasion) => (
                <div key={occasion} className="flex items-center space-x-2">
                  <Checkbox
                    id={occasion}
                    checked={filters.occasion.includes(occasion)}
                    onCheckedChange={(checked) => handleOccasionChange(occasion, checked as boolean)}
                  />
                  <Label htmlFor={occasion} className="text-sm font-normal">
                    {occasion}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value })}
                max={100000}
                min={0}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₩{filters.priceRange[0].toLocaleString()}</span>
                <span>₩{filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {["Small", "Medium", "Large", "Extra Large"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={size}
                    checked={filters.size.includes(size)}
                    onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                  />
                  <Label htmlFor={size} className="text-sm font-normal">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {["Red", "Pink", "White", "Yellow", "Purple", "Mixed"].map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={color}
                    checked={filters.color.includes(color)}
                    onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                  />
                  <Label htmlFor={color} className="text-sm font-normal">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
