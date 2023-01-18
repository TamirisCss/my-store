import { FunctionComponent } from "react";

//Utils
import Category from "../../types/category.types";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <>
      <div>{category.displayName}</div>
      <p>Explorar</p>
    </>
  );
};

export default CategoryItem;
