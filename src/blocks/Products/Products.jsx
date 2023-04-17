import ProductCard from "../../components/ProductCard/ProductCard";
import TitleH2 from "../../components/TitleH2/TitleH2";
import "./Products.scss";


const Products = ({ products }) => {
	return (
		<>
			<div className="products__container container">
				<TitleH2 title="Популярные наборы" />
				<div className="products__row">
					
						{products.map((product) => {
							return (
								<ProductCard img={product.img} title={product.title} desc={product.desc} price={product.price} />
							)
						})}
					
				</div>
				<div className="products__btn">Все праздничные наборы</div>
			</div>
		</>
	);
}

export default Products;