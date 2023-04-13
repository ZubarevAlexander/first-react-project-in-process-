
const ProductCard = ({img, title, desc, price}) => {
	return (
		<div className="products__item">
			<div className="products__image">
				<img src={img}></img>
			</div>
			<h3 className="products__title">{title}</h3>
			<div className="products__desc">{desc}</div>
			<div className="products__price">{price}</div>
		</div>
	);
}

export default ProductCard;