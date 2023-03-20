import Slider from "./../Slider";
import { ads } from "./../../helpers/HeaderAdList";

const Header = () => {
	return (
		<header className="header">
			<div className="promo">
				<div className="container">
					<Slider slides={ads}></Slider>
				</div>
			</div>
		</header>
	);
}

export default Header;