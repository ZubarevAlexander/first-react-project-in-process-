import SliderPromo from "../SliderPromo";
import { ads } from "./../../helpers/HeaderAdList";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
	return (
		<header className="header">
			<SliderPromo slides={ads}></SliderPromo>
			<HeaderTop></HeaderTop>
		</header>
	);
}

export default Header;