import Home from './container/Home';
import Layout from './container/Layout';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    
    <Layout>
      <Home/>
    </Layout>
    </>
  );
}

export default App;
