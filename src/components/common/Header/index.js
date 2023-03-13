import { Link } from "react-router-dom";
import { HeaderWrap, Logo, Comments, Profile } from "./styled";
import LogoImg from "images/logo1.png";
import ProfileImg from "images/profile2.png";

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo>
          <img src={LogoImg} alt="로고 이미지" />
        </Logo>
      </Link>
      <Comments>
        <li>어디든지</li>
        <li>어디든지</li>
        <li>어디든지</li>
      </Comments>
      <Link to="/profile">
        <Profile>
          <img src={ProfileImg} alt="프로필 이미지" />
        </Profile>
      </Link>
    </HeaderWrap>
  );
}

export default Header;
