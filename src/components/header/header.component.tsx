import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiAmpleDress } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

//Utils
import { auth } from "../../config/firebase.config";
import { logoutUser } from "../../store/reducers/users/user.actions";
import { toggleCart } from "../../store/reducers/cart/cart.actions";
import { useAppSelector } from "../../hooks/redux.hooks";
import { selectProductsCount } from "../../store/reducers/cart/cart.selectors";

//Styles
import {
  HeaderContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle,
} from "./header.styles";

const Header = () => {
  const navigate = useNavigate();

  const productsCount = useAppSelector(selectProductsCount);

  const dispatch = useDispatch();

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  );

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleExploreClick = () => {
    navigate("/explore");
  };

  const handleSignOutClick = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleHomeClick}>
        My Store <GiAmpleDress size={25} color={"white"} />
      </HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explore</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Sing up</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Logout</HeaderItem>
        )}
        <HeaderItem onClick={handleCartClick}>
          <HiOutlineShoppingBag size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
