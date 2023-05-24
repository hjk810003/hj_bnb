import { ContainerWrap } from "./styled";

function Container({children}) {
  return (
    <ContainerWrap>{children}</ContainerWrap>
  );
}

export default Container;
