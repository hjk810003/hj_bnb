import { Link } from "react-router-dom";
import { HeaderWrap, Logo, MapArea, Profile } from "./styled";
import LogoImg from "images/logo1.png";
import ProfileImg from "images/profile2.png";

function Header() {
  return (
    <HeaderWrap>
      <Logo>
        <Link to="/">
            <img src={LogoImg} alt="로고 이미지" />
        </Link>
      </Logo>
      <MapArea>
        <span>서울</span>
        <span>어디든지</span>
        <span>근무가능</span>
        <button className="ic-search"><span>지도</span></button>
      </MapArea>
      <Profile>
        <Link to="/profile">
            <img src={ProfileImg} alt="프로필 이미지" />
        </Link>
      </Profile>
    </HeaderWrap>
  );
}

export default Header;
