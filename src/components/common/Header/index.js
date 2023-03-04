import { Link } from "react-router-dom";
import { HeaderWrap, Logo, Comments } from "./styled";
import LogoImg from "images/logo.png";

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo>
          <img src={LogoImg} alt="로고" />
        </Logo>
      </Link>
      <Comments>
        <li>어디든지</li>
        <li>어디든지</li>
        <li>어디든지</li>
      </Comments>
      <Link to="/profile">프로필</Link>
    </HeaderWrap>
  );
}

export default Header;
