"use client";
import { useEffect, useState, Suspense } from "react";
import CategoryList from "@/components/CategoryList";
import SubcategoryList from "@/components/Subcategory";
import MobileMenu from "@/components/MobileMenu";
import { ICategory } from "@/types/categoryTypes";

export default function Home() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<number | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        throw new Error((err as Error).message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <div className="relative h-[400px] w-full bg-banner">
        {/* PC View */}
        <div className="hidden max-w-screen-xl mx-auto md:flex absolute inset-0">
          <CategoryList
            categories={categories}
            setHoveredCategory={setHoveredCategory}
            setHoveredSubcategory={setHoveredSubcategory}
          />
          {hoveredCategory !== null &&
            categories[hoveredCategory]?.childrens && (
              <SubcategoryList
                subcategories={categories[hoveredCategory]?.childrens || []}
                hoveredSubcategory={hoveredSubcategory}
                setHoveredSubcategory={setHoveredSubcategory}
                hoveredCategory={hoveredCategory}
                setHoveredCategory={setHoveredCategory}
              />
            )}
        </div>

        {/* Mobile View */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-white text-black rounded"
          >
            {isMobileMenuOpen ? "Close" : "Categories"}
          </button>
          {isMobileMenuOpen && (
            <MobileMenu
              categories={categories}
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}

