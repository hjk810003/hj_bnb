import { Header, Footer } from "../../components/common";
import { Container } from "./styled";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;
