import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

//Components
import CategoryItem from "../category-item/category-item.component";

// Styles
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

//Utils
import Category from "../../types/category.types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(collection(db, "categories"));
      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
