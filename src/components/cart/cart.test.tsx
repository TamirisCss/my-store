import userEvent from "@testing-library/user-event";
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
    getByText(/Go to Checkout/i);
  });

  it("should not show checkout button and should show an empty message if cart is empty", () => {
    const { getByText, queryByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [],
        },
      } as any,
    });

    getByText(/Your cart is empty!/i);
    expect(queryByText(/Go to Checkout/i)).toBeNull();
  });

  it("should increase product quantity on increase click", () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
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

    const increaseButton = getByLabelText(/increase quantity of hat/i);

    userEvent.click(increaseButton);

    getByText("3");
  });
});
