import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home, Mypage } from './pages';
import GlobalStyle from './styles/GlobalStyle';

function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/mypage/:categroy' element={<Mypage />}></Route>
				</Routes>
			</Layout>
		</>
	);
}

export default App;
