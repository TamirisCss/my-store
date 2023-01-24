import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiAmpleDress } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

//Styles
import {
  HeaderContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle,
} from "./header.styles";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleHomeClick}>
        Minha Lojinha <GiAmpleDress size={25} color={"white"} />
      </HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
        <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        <HeaderItem>
          <HiOutlineShoppingBag size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
