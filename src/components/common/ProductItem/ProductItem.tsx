import React, { FC } from "react";
import { IProduct } from "../../../models/product";
import { Grid } from "@mui/material";

interface IProductItemProps {
	item: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ item }) => {
	return (
		<Grid item xs={12} md={6} lg={4}>
			{item.title}
		</Grid>
	);
};

export default ProductItem;
