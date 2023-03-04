import { Wrap, Container } from "./styled";
import { Header, Footer } from "../common";

function Layout({ children }) {
  return (
    <Wrap>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrap>
  );
}

export default Layout;
