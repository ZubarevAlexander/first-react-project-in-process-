import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "./Promotion.scss";

const Promotion = ({ promotions }) => {
	return (
		<div className="promotions">
			<div className="promotions__container container">
				<Swiper
					modules={[Autoplay, Pagination]}
					spaceBetween={20}
					slidesPerView={4}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					loop={true}
					speed={1350}
					pagination={{ clickable: true }}
				>

					{promotions.map((promotion) =>
					(<SwiperSlide key={promotion.icon} className="promotions__item">
						<div className="promotions__image">
							<img src={promotion.img} alt={promotion.text}></img>
						</div>
						<div className="promotions__content">
							<div className="promotions__title">
								<p>{promotion.title}</p>
							</div>
							<div className="promotions__text">
								<p>{promotion.text}</p>
							</div>
						</div>
					</SwiperSlide>)
					)}
				</Swiper>
			</div>
		</div>
	);
}

export default Promotion;