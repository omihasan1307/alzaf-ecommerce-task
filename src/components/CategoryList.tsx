"use client";
import { FaChevronRight } from "react-icons/fa";
import { ICategoryListProps } from "@/types/categoryTypes";

const CategoryList = ({
  categories,
  setHoveredCategory,
}: ICategoryListProps) => {
  return (
    <div
      className="bg-white border-r h-[390px] w-[280px] p-4 overflow-scroll"
      // onMouseLeave={() => {
      //   setHoveredCategory(null);
      //   setHoveredSubcategory(null); 
      // }}
    >
      {categories?.map((category, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredCategory(index)}
          className='flex items-center px-2 rounded-md mb-2 cursor-pointer'
        >
          <div className="w-full flex justify-between items-center hover:text-orange-500">
            <p>{category.title}</p>
            {category?.childrens && category?.childrens?.length > 0 && (
              <FaChevronRight className="text-sm font-light" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
