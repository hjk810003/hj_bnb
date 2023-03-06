import { Item, Strong, Span } from "./styled";

function List({ title, value }) {
  return (
    <Item>
      <Strong>{title}</Strong>
      <Span>{value}</Span>
    </Item>
  );
}

export default List;
