import { FunctionComponent } from "react";
import { BsBagCheck } from "react-icons/bs";

// Components
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

// Utilities
import { useAppSelector } from "../../hooks/redux.hooks";
import { selectProductsTotalPrice } from "../../store/reducers/cart/cart.selectors";

// Styles
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal,
} from "./checkout.styles";

const Checkout: FunctionComponent = () => {
  const { products } = useAppSelector((state) => state.cartReducer);
  const productsTotalPrice = useAppSelector(selectProductsTotalPrice);

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>Purchase</CustomButton>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
