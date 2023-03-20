// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "./Header/promo/Promo.css";

const Slider = ({ slides }) => {
	return (
		<Swiper
			modules={[Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			loop={true}
			speed = {1350}

		>
			{slides.map((ad) =>
			(<SwiperSlide key={ad.icon} className="header-ad">
				<img src={ad.icon} alt={ad.text} className="header-ad__icon"></img>
				<div className="header-ad__text">
					<p>{ad.text}</p>
				</div>
			</SwiperSlide>)
			)}


		</Swiper>
	);
};

export default Slider;