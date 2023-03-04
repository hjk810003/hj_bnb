import Card from "components/Card";
import { Tab, Item } from "components/Tab";
import { CARD_ITEM, TAB_ITEM } from "constants/home";
import { useState } from "react";
import { CardBox } from "./styled";

function Home() {
  const [label, setLabel] = useState("all");

  return (
    <>
      <Tab>
        {TAB_ITEM.map((item) => (
          <Item
            key={item.label}
            onClick={() => setLabel(item.label)}
            isSelected={item.label === label}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </Tab>
      <CardBox>
        {CARD_ITEM.map((item, index) => {
          return (
            (item.label === label || label === "all") && (
              <Card
                key={index}
                title={item.title}
                url={item.url}
                img={item.img}
                skill={item.skill}
                day={item.day}
              />
            )
          );
        })}
      </CardBox>
    </>
  );
}

export default Home;
