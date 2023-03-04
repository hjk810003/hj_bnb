import { TabItem } from "./styled";

function Item({ icon, name, onClick, isSelected }) {
  return (
    <TabItem onClick={onClick} className={isSelected ? "selected" : ""}>
      <img src={icon} alt={name} /> {name}
    </TabItem>
  );
}

export default Item;
