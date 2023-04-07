import "./Feature.scss";

const Feature = ({ icon, title, text }) => {
	return (
		<div className="feature__item">
			<div className="feature__bg">
				<div className="feature__triangle-up"></div>
				<div className="feature__triangle-down"></div>
				{/* <svg  viewBox="0 0 1 1" preserveAspectRatio="none" fill="none"> 
					<polygon fill="none;" points="0,0 1,0 0,1" />
				</svg> */}
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