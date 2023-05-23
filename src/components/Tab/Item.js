import { TabItem } from "./styled";

function Item({ icon, name, onClick, isSelected }) {
  return (
    <TabItem onClick={onClick} className={isSelected ? "selected" : ""}>
      {icon} {name}
    </TabItem>
  );
}

export default Item;
