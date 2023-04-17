import "./Footer.scss";
import footericon01 from "./icons/01.svg";
import footericon02 from "./icons/02.svg";
import footericon03 from "./icons/03.svg";
import inst from "./icons/inst.svg";
import facebook from "./icons/facebook.svg";
import vk from "./icons/vk.svg";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__container container">
				<div className="footer__row">
					<div className="footer__column">
						<div className="footer__item">
							<div className="footer__features footer-feature">
								<div className="footer-feature__column">
									<div className="footer-feature__icon">
										<img src={footericon01}></img>
									</div>
									<div className="footer-feature__text">Готовим вручную и с любовью</div>
								</div>
								<div className="footer-feature__column">
									<div className="footer-feature__icon">
										<img src={footericon02}></img>
									</div>
									<div className="footer-feature__text">Доставим в день заказа</div>
								</div>
								<div className="footer-feature__column">
									<div className="footer-feature__icon">
										<img src={footericon03}></img>
									</div>
									<div className="footer-feature__text">100% миндальная мука и натуральные ингредиенты</div>
								</div>
							</div>
							<div className="footer__copyright">
								© 2023 Макароншоп <br></br>ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22
							</div>
						</div>
					</div>
					<div className="footer__column">
						<nav className="footer__menu">
							<ul className="footer__list">
								<li>Информация</li>
								<li><a href="" className="footer__link">О компании</a></li>
								<li><a href="" className="footer__link">Гарантии вкуса и свежести</a></li>
								<li><a href="" className="footer__link">Доставка и оплата</a></li>
								<li><a href="" className="footer__link">Контакты</a></li>
							</ul>
							<ul className="footer__list">
								<li>Каталог</li>
								<li><a href="" className="footer__link">Каталог десертов</a></li>
								<li><a href="" className="footer__link">Готовые наборы</a></li>
								<li><a href="" className="footer__link">Собрать свой набор</a></li>
								<li><a href="" className="footer__link">Акции</a></li>
							</ul>
							<ul className="footer__list">
								<li>Для бизнеса</li>
								<li><a href="" className="footer__link">Корпоративные подарки</a></li>
								<li><a href="" className="footer__link">Для юридических лиц</a></li>
								<li><a href="" className="footer__link">Оптовикам</a></li>
							</ul>
						</nav>
					</div>
					<div className="footer__column">
						<div className="footer__info">
							<div className="footer__phone">
								<a href="tel:+78123098288">+7 (812) 309 82 88</a>
							</div>
							<div className="footer__time">с 9:00 до 21:00</div>
							<div className="footer__socials">
								<div className="footer__icon">
									<img src={inst} alt="instagram" />
								</div>
								<div className="footer__icon">
									<img src={facebook} alt="facebook" />
								</div>
								<div className="footer__icon">
									<img src={vk} alt="vk" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;