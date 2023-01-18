import { useState } from "react";

//Utils
import Category from "../../types/category.types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  return <div>Categories</div>;
};

export default Categories;
