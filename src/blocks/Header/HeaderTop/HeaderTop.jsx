import iconMobile from "./../icons/mobile.svg";
import basket from "./../icons/basket.svg";

import telegram from "./../icons/telegram.svg";
import vk from "./../icons/vk.svg";
import classmates from "./../icons/classmates.svg";
import logo from "./../HeaderBottom/logo.png";
import "./HeaderTop.scss";
import { useState,useEffect } from "react";

//onClick={() => setActive(false)}
//{active ? "header-top__burger _active" : "header-top__burger"}
const HeaderTop = () => {
	const [menuActive, setMenuActive] = useState(false);

	const blockScroll = () => {
		document.body.classList.toggle('_lock');
	 };
	
	return (
		<div className="header-top" >
			<div className="header-top__container container">
				<div className={menuActive ? "header-top__burger _active" : "header-top__burger"} onClick={()=>{blockScroll(); setMenuActive(!menuActive)}} >
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="header-top__logo" >
					<img src={logo} alt=""></img>
				</div>
				<div className="header-top__menu desktop-menu">
					<div className="desktop-menu__body">
						<ul className="desktop-menu__list">
							<li className="desktop-menu__item"><a href="#" className="desktop-menu__link">Гарантия свежести</a></li>
							<li className="desktop-menu__item"><a href="#" className="desktop-menu__link">Доставка и оплата</a></li>
							<li className="desktop-menu__item"><a href="#" className="desktop-menu__link">Оптовые поставки</a></li>
							<li className="desktop-menu__item"><a href="#" className="desktop-menu__link">Контакты</a></li>
						</ul>
					</div>
				</div>
				<div className="header-top__actions actions">
					<div className="actions__phone">
						<img src={iconMobile} alt="" />
						<a href="tel:8 812 309-82-88" >8 812 309-82-88</a>
					</div>
					<a href="" className="actions__basket">
						<div className="basket">
							<img src={basket} alt="" />
							<span>0</span>
						</div>
						<span >
							В корзине( <span>0</span> товара )
						</span>
					</a>
					<div className="actions__socials socials">
						<div className="socials__items">
							<a href="" className="socials__link">
								<img src={telegram} alt="telegram" />
							</a>
							<a href="" className="socials__link">
								<img src={vk} alt="vk" />
							</a>
							<a href="" className="socials__link">
								<img src={classmates} alt="classmates" />
							</a>
						</div>
					</div>
				</div>
			</div >
			<div className="header-top__mobile mobile">
					<div className="mobile__container container">
						<div className="mobile__menu mobile-menu">
							<div className={menuActive ? "mobile-menu__body _active" : "mobile-menu__body"}>
								<ul className="mobile-menu__list left-menu-mobile">
									<li className="left-menu-mobile__item"><a href="" className="left-menu-mobile__link">СЛАДКИЕ ДНИ</a></li>
									<li className="left-menu-mobile__item"><a href="" className="left-menu-mobile__link">подарочные наборы</a></li>
									<li className="left-menu-mobile__item"><a href="" className="left-menu-mobile__link">Собрать набор</a></li>
								</ul>
								<ul className="mobile-menu__list right-menu-mobile">
									<li className="right-menu-mobile__item"><a href="" className="right-menu-mobile__link">Создать дизайн</a></li>
									<li className="right-menu-mobile__item"><a href="" className="right-menu-mobile__link">КОМПАНИЯМ</a></li>
									<li className="right-menu-mobile__item"><a href="" className="right-menu-mobile__link">ВЕСЬ КАТАЛОГ</a></li>
								</ul>
								<ul className="mobile-menu__list">
									<li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Гарантия свежести</a></li>
									<li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Доставка и оплата</a></li>
									<li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Оптовые поставки</a></li>
									<li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Контакты</a></li>
								</ul>
								<ul className="mobile-menu__list">
									<div className="mobile-menu__phone">
										<img src={iconMobile} alt="" />
										<a href="tel:8 812 309-82-88" >8 812 309-82-88</a>
									</div>
									<div className="mobile-menu__socials">
										<div className="socials__items">
											<a href="" className="socials__link">
												<img src={telegram} alt="telegram" />
											</a>
											<a href="" className="socials__link">
												<img src={vk} alt="vk" />
											</a>
											<a href="" className="socials__link">
												<img src={classmates} alt="classmates" />
											</a>
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
		</div >
		
	);
}

export default HeaderTop;