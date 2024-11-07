'use client'
import { FiX } from "react-icons/fi";
import { ICategory } from "@/types/categoryTypes";
import { useState } from "react";

interface MobileMenuProps {
  categories: ICategory[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenu = ({ categories, toggleMobileMenu }: MobileMenuProps) => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-white p-4 z-50 overflow-auto">
      <button onClick={toggleMobileMenu} className="p-2 rounded-md focus:outline-none">
        <FiX size={24} />
      </button>
      <div className="flex flex-col p-4 space-y-2">
        {categories?.map((category, index) => (
          <div key={index}>
            <div
              onClick={() => category.childrens && setExpandedCategory(expandedCategory === index ? null : index)}
              className="flex items-center justify-between p-3 rounded-md cursor-pointer"
            >
              <p>{category.title}</p>
              {category.childrens && <span>{expandedCategory === index ? "−" : "+"}</span>}
            </div>
            {expandedCategory === index && (
              <div className="ml-4 mt-2 space-y-2 bg-gray-100">
                {category?.childrens?.map((sub, subIndex) => (
                  <div key={subIndex} onClick={() => setExpandedSubcategory(subIndex)} className="p-2 rounded-md">
                    <div className="flex justify-between">
                      <p>{sub.title}</p>
                      {sub.childrens && <span>{expandedSubcategory === subIndex ? "−" : "+"}</span>}
                    </div>
                    {expandedSubcategory === subIndex && (
                      <div className="ml-4 mt-2 space-y-2 bg-gray-200">
                        {sub?.childrens?.map((subSub, subSubIndex) => (
                          <p key={subSubIndex} className="p-2">{subSub.title}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
