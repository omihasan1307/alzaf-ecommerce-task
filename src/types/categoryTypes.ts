/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICategory {
    id: number;
    title: string;
    parent_id: number | null;
    category_id: number;
    icon?: string | null | undefined; 
    image?: string | null; 
    link: string;
    childrens?: ICategory[];
  }

export  interface ICategoryListProps {
    categories: ICategory[] ;
    setHoveredCategory: (index: number | null) => void;
    setHoveredSubcategory: any;
  }

export  interface SubcategoryListProps {
    subcategories: ICategory[];
    hoveredSubcategory: number | null;
    setHoveredSubcategory: (index: number | null) => void;
    hoveredCategory: number | null;
    setHoveredCategory: any;
  }