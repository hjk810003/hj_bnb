import { useState } from "react";
import Tab from "components/Tab";
import Card from "components/Card";
import { TabBox, CardBox } from "./styled";
import { CARD_ITEM, TAB_ITEM } from "constants/home";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/free-mode';

function Home() {
  const [label, setLabel] = useState("all");

  return (
    <>
      <TabBox>
        <Swiper
          modules={[FreeMode]}
          className="tab-swiper"
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={20}
        >
          {TAB_ITEM.map((item) => (
            <SwiperSlide key={item.label}>
              <Tab
                onClick={() => setLabel(item.label)}
                isSelected={item.label === label}
                icon={item.icon}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabBox>

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
