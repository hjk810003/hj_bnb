import { HeaderWrap, Logo, IntroBox, Profile } from "./styled";

function Header() {
  return (
    <HeaderWrap>
      <Logo>로고</Logo>
      <IntroBox>
        <li>어디든지</li>
        <li>어디든지</li>
        <li>어디든지</li>
      </IntroBox>
      <Profile />
    </HeaderWrap>
  );
}

export default Header;
