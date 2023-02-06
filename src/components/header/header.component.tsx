import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiAmpleDress } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { useContext } from "react";

//Utils
import { auth } from "../../config/firebase.config";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

//Styles
import {
  HeaderContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle,
} from "./header.styles";

const Header = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);
  const { toggleCart, productsCount } = useContext(CartContext);

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

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleHomeClick}>
        Minha Lojinha <GiAmpleDress size={25} color={"white"} />
      </HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={toggleCart}>
          <HiOutlineShoppingBag size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
