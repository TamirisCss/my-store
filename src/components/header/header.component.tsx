import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">MyStore</h2>

      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item">
          <HiOutlineShoppingBag size={25} />
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
