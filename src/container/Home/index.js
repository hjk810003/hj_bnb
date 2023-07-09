import { useState } from 'react';
import { CardBox, TabBox } from './styled';
import Tab from 'components/Tab';
import { CARD_ITEM, TAB_ITEM } from 'constants/home';
import Card from './components/Card';
import { Inner } from 'styles/common';

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
			<Inner>
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
			</Inner>
		</>
	);
}

export default Home;
