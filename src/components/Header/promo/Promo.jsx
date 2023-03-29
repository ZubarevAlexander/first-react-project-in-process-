import "./Promo.scss";

const Promo = ({ icon, text }) => {

	return (
		<div className="header-ad">
			<img src={icon} alt="" className="header-ad__icon"></img>
			<div className="header-ad__text">
				<p>{text}</p>
			</div>
		</div >
	);
}

export default Promo;