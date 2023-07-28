import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextType } from "../../contexts/ProductContext/types";
import { Box, CircularProgress } from "@mui/material";
import ProductItem from "../../components/common/ProductItem/ProductItem";

const DetailsPage = () => {
	const { id } = useParams();
	const { product, getOneProduct } = useContext(
		productContext
	) as IProductContextType;

	useEffect(() => {
		id && getOneProduct(+id);
	}, []);

	console.log(product);

	return (
		<div>{product ? <ProductItem item={product} /> : <CircularProgress />}</div>
	);
};

export default DetailsPage;
