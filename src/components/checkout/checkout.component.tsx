import { FunctionComponent, useContext } from "react";
import { BsBagCheck } from "react-icons/bs";

import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal,
} from "./checkout.styles";

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext);

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

          <CheckoutTotal>Total: €{productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>Purchase</CustomButton>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
