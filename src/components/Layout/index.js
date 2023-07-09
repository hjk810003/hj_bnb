import { Wrap, ContainerWrap } from './styled';
import { Header, Footer } from '../common';

function Layout({ children }) {
	return (
		<Wrap>
			<Header />
			<ContainerWrap>{children}</ContainerWrap>
			<Footer />
		</Wrap>
	);
}

export default Layout;
