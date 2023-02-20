import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Category from "../../types/category.types";
import CategoryItem from "./category-item.component";

describe("Category Item", () => {
  it("Should render the category correctly", () => {
    const category: Category = {
      id: "1",
      displayName: "Lorem Ipsum",
      imageUrl: "image_url",
      name: "lorem-ipsum",
      products: [],
    };

    const { getByText } = render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    );

    getByText("Lorem Ipsum");
    getByText("Explore");
  });
});
