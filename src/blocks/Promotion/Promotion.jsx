import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Promotion.scss";
import TitleH2 from "../../components/TitleH2/TitleH2";

const Promotion = ({ promotions }) => {
	return (
		<>
			<div className="promotions__container container">
				<TitleH2 title="Акции"/>
				<Swiper
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={4}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					loop={false}
					speed={1350}
					pagination={{ clickable: true }}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						467.98: {
							slidesPerView: 2,
						},
						767.98: {
							slidesPerView: 3,
						},
						991.98: {
							slidesPerView: 4,
						}
					}}
				>

					{promotions.map((promotion) =>
					(<SwiperSlide key={promotion.icon} className="promotions__item">
						<div className="promotions__content">
							<div className="promotions__subtitle">
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
		</>
	);
}

export default Promotion;