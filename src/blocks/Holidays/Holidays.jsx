import TitleH2 from "../../components/TitleH2/TitleH2";
import "./Holidays.scss";

const Holidays = ({ holidays }) => {
	return (
		<>
			<div className="holidays__container container">
				<TitleH2 title="Ближайшие праздники" />
				<div className="holidays__row">
					{holidays.map((holiday) => {
						return (
							<>
								<div className="holidays__column">
									<div className="holidays__item">
										<div className="holidays__image">
											<img src={holiday.icon}></img>
										</div>
										<div className="holidays__text">
											<div className="holidays__day">{holiday.day}</div>
											<div className="holidays__name">{holiday.name}</div>
										</div>
									</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
		</>
	);
}

export default Holidays;