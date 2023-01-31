import { FunctionComponent, useContext, useEffect } from "react";

// Styles
import { Container } from "./categories-overview.styles";

// Utilities
import { CategoryContext } from "../../contexts/category.context";

// Components
import CategoryOverview from "../category-overview/category-overview.component";
import Loading from "../loading/loading.component";

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fetchCategories();
    }
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default CategoriesOverview;
