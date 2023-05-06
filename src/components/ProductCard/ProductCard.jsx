import { useState } from "react";
import "./ProductCard.scss";


const ProductCard = ({ img, title, desc, price }) => {

	const [isAdded, setIsAdded] = useState(false);

	const addToBasket = () => {
		setIsAdded(!isAdded);
	}

	return (
		<div className="products__column">
			<div className="products__item">
				<div className="products__image">
					<img src={img}></img>
				</div>
				<div className="products__content">
					<h3 className="products__title">{title}</h3>
					<div className="products__desc">{desc}</div>
				</div>
				<div className="products__price">
					<span>{price}</span>
					<button onClick={addToBasket} className={isAdded ? "products__add checked" : "products__add"}>
						<div className={isAdded ? "products__basket checked" : "products__basket"}>
							<span className={isAdded ? "checked" : ""}>В корзину</span>
						</div>
					</button>
				</div>

			</div>
		</div>
	);
}

export default ProductCard;