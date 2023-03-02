import { HeaderWrap, Logo, IntroTxt, Profile } from "./styled";

function Header() {
  return (
    <HeaderWrap>
      <Logo>로고</Logo>
      <IntroTxt>
        <li>어디든지</li>
        <li>어디든지</li>
        <li>어디든지</li>
      </IntroTxt>
      <Profile />
    </HeaderWrap>
  );
}

export default Header;
