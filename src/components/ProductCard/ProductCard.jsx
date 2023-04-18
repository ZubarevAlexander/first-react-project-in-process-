import "./ProductCard.scss";


const ProductCard = ({ img, title, desc, price }) => {
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
					<div className="products__add">
						<div className="products__basket">
							<span>В корзину</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default ProductCard;