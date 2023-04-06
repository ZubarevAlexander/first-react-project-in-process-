import { useState } from "react";
import SliderPromo from "../Header/promo/SliderPromo";
import { ads } from "./../../helpers/Promo/HeaderAdList";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<header className="header" onClick={() => setMenuActive(!menuActive)}>
			<SliderPromo slides={ads}></SliderPromo>
			<HeaderTop active={menuActive} setActive={setMenuActive}></HeaderTop>
			<HeaderBottom></HeaderBottom>
			{/* <HeaderMobile ></HeaderMobile> */}
		</header>
	);
}

export default Header;