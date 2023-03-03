import { Link } from "react-router-dom";
import { HeaderWrap, Logo, IntroTxt, Profile } from "./styled";

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo>로고</Logo>
      </Link>
      <IntroTxt>
        <li>어디든지</li>
        <li>어디든지</li>
        <li>어디든지</li>
      </IntroTxt>
      <Link to="/profile">
        <Profile />
      </Link>
    </HeaderWrap>
  );
}

export default Header;
