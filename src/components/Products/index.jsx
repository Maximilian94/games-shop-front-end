import React, { useState, useEffect } from "react";

// import jsonProducts from './products.json';

import ProductCard from "./ProductCard";

import "./style.css";

import { useProducts } from "../../context/ProductContext";

function Products() {
	const { products } = useProducts();
	const [actualPage, setActualPage] = useState(1);
	const productsPerPage = 2;

	const getPaginateProducts = () => {
		const startIndex = (actualPage - 1) * productsPerPage;
		const lastIndex = startIndex + productsPerPage;
		console.log(startIndex, lastIndex);
		console.log(products.slice(startIndex, lastIndex));
		return products.slice(startIndex, lastIndex);
	};

	const getNumberPages = () => Math.ceil(products.length / productsPerPage);
	const numberOfPages = getNumberPages();

	const pagination = () => {
		console.log(getNumberPages());
		let buttons = [];
		for (let buttonPage = 1; buttonPage < numberOfPages; buttonPage += 1) {
			buttons.push(
				<button
					type="button"
					id={buttonPage}
					key={buttonPage}
					onClick={() => setActualPage(buttonPage)}
				>
					{buttonPage}
				</button>
			);
		}
		return <div>{buttons}</div>;
	};

	return (
		<React.Fragment>
			<div className="products-list">
				{getPaginateProducts().map((product) => (
					<ProductCard productData={product} key={product.id} />
				))}
			</div>
			{pagination()}
		</React.Fragment>
	);
}

export default Products;
