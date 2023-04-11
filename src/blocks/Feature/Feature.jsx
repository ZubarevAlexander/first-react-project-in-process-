import "./Feature.scss";
// import bg1 from "./bg/bg1.png";

const Feature = ({ icon, title, text, bg }) => {
	return (
		<div className="feature__item">
			<div className={"feature__bg " + bg}>
				{/* <img src={bg1}></img> */}
			</div>
			<div className="feature__content">
				<div className="feature__icon">
					<img src={icon} alt="" />
				</div>
				<div className="feature__title">{title}</div>
				<div className="feature__text">{text} </div>
			</div>
		</div>
	);
}

export default Feature;