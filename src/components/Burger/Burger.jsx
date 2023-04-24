import "./Burger.scss";

const Burger = ({active, setActive}) => {
	//className={active ? "header-top__burger _active" : "header-top__burger"} onClick={() => setActive(false)}
	return (
		<div className="header-top__burger">
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}

export default Burger;