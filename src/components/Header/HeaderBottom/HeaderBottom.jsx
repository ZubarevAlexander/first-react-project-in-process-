import logo from "./logo.png";
import "./HeaderBottom.scss";


const HeaderBottom = () => {
	return (
		<div className="header-bottom">
			<div className="header-bottom__container container">
				<div className="header-bottom__menu-left left-menu">
					<ul className="left-menu__list">
						<li className="left-menu__item"><a href="" className="left-menu__link">СЛАДКИЕ ДНИ</a></li>
						<li className="left-menu__item"><a href="" className="left-menu__link">подарочные наборы</a></li>
						<li className="left-menu__item"><a href="" className="left-menu__link">Собрать набор</a></li>
					</ul>
				</div>
				<img src={logo} alt="Logo" className="header-bottom__logo" />
				<div className="header-bottom__menu-right right-menu">
					<ul className="right-menu__list">
						<li className="right-menu__item"><a href="" className="right-menu__link">Создать дизайн</a></li>
						<li className="right-menu__item"><a href="" className="right-menu__link">КОМПАНИЯМ</a></li>
						<li className="right-menu__item"><a href="" className="right-menu__link">ВЕСЬ КАТАЛОГ</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default HeaderBottom;