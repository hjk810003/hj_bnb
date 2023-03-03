import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrap, Container } from "./styled";
import { Header, Footer } from "../../components/common";
import { Home, Profile } from "../pages";

function Layout() {
  return (
    <BrowserRouter>
      <Wrap>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Wrap>
    </BrowserRouter>
  );
}

export default Layout;
