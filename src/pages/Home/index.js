import { useState } from 'react';
import Tab from 'components/Tab';
import Card from 'components/Card';
import { TabBox, CardBox } from './styled';
import { CARD_ITEM, TAB_ITEM } from 'constants/home';

function Home() {
  const [label, setLabel] = useState('all');

  const onChangeLabel = (label) => {
    setLabel(label);
  };

  return (
    <>
      <TabBox>
        <Tab items={TAB_ITEM} label={label} onClick={onChangeLabel} />
      </TabBox>

      <CardBox>
        {CARD_ITEM.map((item, index) => {
          return (
            (item.label === label || label === 'all') && (
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