import { useLocation, useNavigate } from 'react-router-dom';
import Contact from './components/Contact';
import Profile from './components/Profile';
import { MypageTab, MypageWrap, Title } from './styled';
import { PROFILE_TAB } from 'constants/profile';
import Tab from 'components/Tab';

function Mypage() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const onTitleChange = (pathname) => {
		switch (pathname) {
			case '/mypage/profile':
				return 'Profile';
			case '/mypage/contact':
				return 'Contact Me';
			default:
				return '';
		}
	};

	return (
		<>
			<MypageTab>
				<Tab
					items={PROFILE_TAB}
					label={pathname}
					onClick={(label) => navigate(label)}
				/>
			</MypageTab>
			<MypageWrap>
				<Title>{onTitleChange(pathname)}</Title>
				{pathname === '/mypage/profile' && <Profile />}
				{pathname === '/mypage/contact' && <Contact />}
			</MypageWrap>
		</>
	);
}

export default Mypage;
