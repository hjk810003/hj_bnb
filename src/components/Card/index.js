import { Link } from "react-router-dom";
import { CardItem, Img, Title, Info } from "./styled";

function Card({ url, img, title, day, skill }) {
  return (
    <CardItem>
      <Link to={url}>
        <Img src={img} alt={title} />
        <Title>{title}</Title>
        <Info>{day}</Info>
        <Info>{skill}</Info>
      </Link>
    </CardItem>
  );
}

export default Card;
