import { useState } from 'react';
import SwiperCore, { FreeMode } from 'swiper';
import { TabSwiper, TabItem } from './styled';
import { Inner } from 'styles/common';

SwiperCore.use([FreeMode]);

function Tab({ items, label, onClick }) {
	const [swiper, setSwiper] = useState(null);

	const params = {
		onSwiper: setSwiper,
		slidesPerView: 'auto',
		freeMode: true,
	};

	const onClickHandler = (itemLabel) => {
		onClick?.(itemLabel);
		console.log(swiper?.clickedIndex);
		return swiper?.slideTo(swiper?.clickedIndex, 300);
	};

	return (
		<Inner>
			<TabSwiper {...params}>
				{items.map((item) => (
					<TabItem
						key={item.label}
						onClick={() => onClickHandler(item.label)}
						$selected={item.label === label}
					>
						{item?.icon} {item.name}
					</TabItem>
				))}
			</TabSwiper>
		</Inner>
	);
}

export default Tab;
