import { Link } from "react-router-dom";
import { Info, Img, Title, Item } from "./styled";

function Card({ title, url, skill, day, img }) {
  return (
    <Item>
      <Link to={url}>
        <Img src={img} alt={title} />
        <Title>{title}</Title>
        <Info>{skill}</Info>
        <Info>{day}</Info>
      </Link>
    </Item>
  );
}

export default Card;
