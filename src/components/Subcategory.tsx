"use client";
import { SubcategoryListProps } from "@/types/categoryTypes";
import { FaChevronRight } from "react-icons/fa";

const SubcategoryList = ({
  subcategories,
  hoveredSubcategory,
  setHoveredSubcategory,
  hoveredCategory,
  setHoveredCategory,
}: SubcategoryListProps) => {
  if (hoveredCategory === null || subcategories.length === 0) return null;

  console.log(subcategories);

  return (
    <div className="bg-white h-[390px] w-[300px] relative">
      <div
        className="bg-white h-[390px] w-[300px] p-4 relative"
        onMouseEnter={() => setHoveredCategory(hoveredCategory)}
        onMouseLeave={() => {
          setHoveredCategory(null);
          setHoveredSubcategory(null);
        }}
      >
        <div>
          {subcategories?.map((sub, subIndex: number) => (
            <div
              key={subIndex}
              onMouseEnter={() => setHoveredSubcategory(subIndex)}
              className="px-2 mb-2 rounded-md hover:bg-gray-100 cursor-pointer "
            >
              <div className="flex justify-between items-center hover:text-orange-500">
                <p className=""> {sub.title} </p>
                <p>
                  {sub?.childrens && sub?.childrens?.length > 0 && (
                    <FaChevronRight className="text-sm font-light" />
                  )}
                </p>
              </div>

              {hoveredSubcategory === subIndex && sub.childrens && (
                <div className="absolute left-full top-0 bg-white h-[390px] w-[300px] p-4 border-l  ">
                  {sub?.childrens?.map((subSub, subSubIndex) => (
                    <div
                      key={subSubIndex}
                      className="px-2 mb-2 rounded-md hover:bg-gray-300 cursor-pointer"
                    >
                      {subSub.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* {hoveredCategory !== null &&
        subcategories &&
        subcategories?.length > 0 && (
          <div
            className="bg-white h-[390px] w-[300px] p-4 relative"
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredSubcategory(null);
            }}
          >
            <div>
              {subcategories?.map((sub, subIndex: number) => (
                <div
                  key={subIndex}
                  onMouseEnter={() => setHoveredSubcategory(subIndex)}
                  className="px-2 mb-2 rounded-md hover:bg-gray-100 cursor-pointer "
                >
                  <div className="flex justify-between items-center hover:text-orange-500">
                    <p className=""> {sub.title} </p>
                    <p >
                      {sub?.childrens && sub?.childrens?.length > 0 && (
                        <FaChevronRight className="text-sm font-light" />
                      )}
                    </p>
                  </div>

                  {hoveredSubcategory === subIndex && sub.childrens && (
                    <div className="absolute left-full top-0 bg-white h-[390px] w-[300px] p-4 border-l overflow-scroll">
                      {sub?.childrens?.map((subSub, subSubIndex) => (
                        <div
                          key={subSubIndex}
                          className="px-2 mb-2 rounded-md hover:bg-gray-300 cursor-pointer"
                        >
                          {subSub.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )} */}

      {/* {subcategories?.map((sub, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => {
            setHoveredCategory(null);
            setHoveredSubcategory(null);
          }}
          className="px-2 mb-2 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex justify-between items-center hover:text-orange-500">
            <p>{sub.title}</p>
            {sub?.childrens && sub?.childrens.length > 0 && (
              <FaChevronRight className="text-sm font-light" />
            )}
          </div>

          {hoveredSubcategory === index && sub.childrens && (
            <div
              style={{ zIndex: 10 }}
              className="absolute left-full top-0 bg-white h-[390px] w-[300px] p-4 border-l overflow-scroll"
            >
              {sub.childrens.map((subSub, subSubIndex) => (
                <div
                  key={subSubIndex}
                  className="px-2 mb-2 rounded-md hover:bg-gray-300 cursor-pointer"
                >
                  {subSub.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default SubcategoryList;
