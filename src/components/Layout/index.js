import { Wrap } from "./styled";
import { Header, Container, Footer } from "../common";

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
