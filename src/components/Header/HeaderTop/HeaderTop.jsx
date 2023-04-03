import iconMobile from "./../icons/mobile.svg";
import basket from "./../icons/basket.svg";

import telegram from "./../icons/telegram.svg";
import vk from "./../icons/vk.svg";
import classmates from "./../icons/classmates.svg";
import logo from "./../HeaderBottom/logo.png";
import "./HeaderTop.scss";
import { useState } from "react";

const HeaderTop = ({ active, setActive }) => {

	return (
		<div className="header-top">
			<div className="header-top__container container">
				<div className={active ? "header-top__burger _active" : "header-top__burger"} onClick={() => setActive(false)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="header-top__logo">
					<img src={logo} alt=""></img> 
				</div>
				<div className="header-top__menu menu">
					<div className="menu__body">
						<ul className="menu__list">
							<li className="menu__item"><a href="#" className="menu__link">Гарантия свежести</a></li>
							<li className="menu__item"><a href="#" className="menu__link">Доставка и оплата</a></li>
							<li className="menu__item"><a href="#" className="menu__link">Оптовые поставки</a></li>
							<li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
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
		</div >
	);
}

export default HeaderTop;