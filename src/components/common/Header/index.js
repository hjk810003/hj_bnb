import { Link } from "react-router-dom";
import { HeaderWrap, Logo, Comments, Profile } from "./styled";

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo>로고</Logo>
      </Link>
      <Comments>
        <li>어디든지</li>
        <li>어디든지</li>
        <li>어디든지</li>
      </Comments>
      <Link to="/profile">
        <Profile />
      </Link>
    </HeaderWrap>
  );
}

export default Header;
