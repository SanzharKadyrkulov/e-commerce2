import React, { useContext, useEffect } from "react";
import { productContext } from "../../../contexts/ProductContext/ProductContext";
import { IProductContextType } from "../../../contexts/ProductContext/types";
import { Grid } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
	const { products, getProducts } = useContext(
		productContext
	) as IProductContextType;
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		getProducts();
	}, [searchParams]);

	console.log(products);

	return (
		<div>
			<Grid container spacing={2} justifyContent="center">
				{products.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</Grid>
		</div>
	);
};

export default ProductList;
