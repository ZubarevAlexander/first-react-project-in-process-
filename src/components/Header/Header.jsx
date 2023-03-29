import { useState } from "react";
import SliderPromo from "../SliderPromo";
import { ads } from "./../../helpers/HeaderAdList";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<header className="header" onClick={() => setMenuActive(!menuActive)}>
			<SliderPromo slides={ads}></SliderPromo>
			<HeaderTop active={menuActive} setActive={setMenuActive}></HeaderTop>
			{/* <HeaderBottom></HeaderBottom> */}
		</header>
	);
}

export default Header;