import { Link } from 'react-router-dom';
import { HeaderWrap, Logo, MapArea, Profile, HeaderInner } from './styled';
// import { BiMapAlt } from "react-icons/bi";
import { BiMap } from 'react-icons/bi';

function Header() {
	return (
		<HeaderWrap>
			<HeaderInner>
				<Logo>
					<Link to='/'>
						<img src='/images/logo1.png' alt='로고 이미지' />
					</Link>
				</Logo>
				<MapArea>
					<span>서울</span>
					<span>어디든지</span>
					<span>근무가능</span>
					<a
						className='btn-map'
						href='https://map.naver.com/v5/entry/subway-station/214?c=15,0,0,0,dh'
						target='_blank'
						rel='noreferrer'
					>
						<span>위치보기</span>
						<BiMap className='ic-map' />
					</a>
				</MapArea>
				<Profile>
					<Link to='/mypage/profile'>
						<img src='/images/profile2.png' alt='프로필 이미지' />
					</Link>
				</Profile>
			</HeaderInner>
		</HeaderWrap>
	);
}

export default Header;
