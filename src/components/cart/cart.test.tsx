import { renderWithRedux } from "../../helpers/test.helpers";
import Cart from "./cart.component";

describe("Cart", () => {
  it("should show correct cart products", () => {
    const { getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: "1",
              imageUrl: "image_url",
              name: "Hat",
              price: 100,
              quantity: 2,
            },
          ],
        },
      } as any,
    });

    getByText(/hat/i);
    getByText("R$100");
    getByText("2");
    getByText("Total: R$200");
  });
});
