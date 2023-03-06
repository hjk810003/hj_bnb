import { Link } from "react-router-dom";
import { Item, Img, Title, Info } from "./styled";

function Card({ url, img, title, day, skill }) {
  return (
    <Item>
      <Link to={url}>
        <Img src={img} alt={title} />
        <Title>{title}</Title>
        <Info>{day}</Info>
        <Info>{skill}</Info>
      </Link>
    </Item>
  );
}

export default Card;
