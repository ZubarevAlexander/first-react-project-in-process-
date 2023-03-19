import HeaderAd from "./HeaderAd";
import { ads } from "./../../helpers/HeaderAdList";


const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-top">
					{ads.map((ad, index) => {
						return (
							<HeaderAd
								key={index}
								icon={ad.icon}
								text={ad.text}
								index={index}
							/>
						);

					})}
				</div>
			</div>
		</header>
	);
}

export default Header;