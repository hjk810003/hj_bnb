import { Header, Footer } from "../../components/common";
import { Wrap, Container } from "./styled";

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
