

const Feature = ({ icon, title, text }) => {
	return (
		<div className="feature__item">
			<img src={icon} alt="" className="feature__icon" />
			<div className="feature__title">{title}</div>
			<div className="feature__text">{text}</div>
		</div>
	);
}

export default Feature;