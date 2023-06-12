import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Profile } from "./pages";
import Form from "./components/Form";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
