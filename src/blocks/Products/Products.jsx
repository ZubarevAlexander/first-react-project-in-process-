import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import TitleH2 from "../../components/TitleH2/TitleH2";
import "./Products.scss";


const Products = () => {
	const [items, setItems] = useState([]);

	useEffect(()=>{
		fetch("https://645a422e65bd868e9315a23f.mockapi.io/items").then((res) => {
			return res.json();
		}).then((json) => {
			setItems(json);
		});
	}, []);
	
	return (
		<>
			<div className="products__container container">
				<TitleH2 title="Популярные наборы" />
				<div className="products__row">

					{items.map((product) => {
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