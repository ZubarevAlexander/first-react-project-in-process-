import { useState } from "react";
import SliderPromo from "./Promo/SliderPromo";
import { ads } from "./../../helpers/Promo/HeaderAdList";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";


const Header = () => {

	return (
		<header className="header" >
			<SliderPromo slides={ads}></SliderPromo>
			<HeaderTop  ></HeaderTop>
			<HeaderBottom></HeaderBottom>
		</header>
	);
}

export default Header;