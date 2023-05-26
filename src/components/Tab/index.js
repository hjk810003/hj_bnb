import { useState } from 'react';
import SwiperCore, { FreeMode } from 'swiper';
import { TabSwiper, TabItem } from './styled';

SwiperCore.use([FreeMode]);

function Tab({ items, label, onClick }) {
	const [swiper, setSwiper] = useState(null);

	const params = {
		onSwiper: setSwiper,
		slidesPerView: 'auto',
		freeMode: true,
		spaceBetween: 30,
	};

	const onClickHandler = (itemLabel) => {
		onClick?.(itemLabel);
		console.log(swiper?.clickedIndex);
		return swiper?.slideTo(swiper?.clickedIndex, 300);
	};

	return (
		<TabSwiper {...params}>
			{items.map((item) => (
				<TabItem
					key={item.label}
					className={item.label === label ? 'selected' : ''}
					onClick={() => onClickHandler(item.label)}
				>
					{item.icon} {item.name}
				</TabItem>
			))}
		</TabSwiper>
	);
}

export default Tab;