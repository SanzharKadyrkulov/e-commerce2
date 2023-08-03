import React, { FC, useContext } from "react";
import { IProduct } from "../../../models/product";
import { Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { productContext } from "../../../contexts/ProductContext/ProductContext";
import { IProductContextType } from "../../../contexts/ProductContext/types";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../../contexts/AuthContext/types";
import { cartContext } from "../../../contexts/CartContext/CartContext";
import { ICartContextTypes } from "../../../contexts/CartContext/types";
interface IProductItemProps {
	item: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ item }) => {
	const { deleteProduct } = useContext(productContext) as IProductContextType;
	const { isAdmin } = useContext(authContext) as IAuthContextTypes;
	const { isAlreadyInCart, addProductToCart, deleteProductFromCart } =
		useContext(cartContext) as ICartContextTypes;

	return (
		<Grid item xs={8} md={6} lg={4}>
			<Card>
				<CardMedia
					sx={{ height: 140 }}
					image={item.image}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{item.description}
					</Typography>
					<Typography variant="h6">${item.price}</Typography>
				</CardContent>
				<CardActions>
					{isAdmin() && (
						<>
							<Button onClick={() => deleteProduct(item.id)} size="small">
								Delete
							</Button>
							<Button component={Link} to={`/edit/${item.id}`} size="small">
								Edit
							</Button>
						</>
					)}
					<Button component={Link} to={`/details/${item.id}`} size="small">
						Learn more
					</Button>

					{isAlreadyInCart(item.id) ? (
						<IconButton onClick={() => deleteProductFromCart(item.id)}>
							<RemoveShoppingCartOutlinedIcon color="error" />
						</IconButton>
					) : (
						<IconButton onClick={() => addProductToCart(item)}>
							<ShoppingCartOutlinedIcon color="primary" />
						</IconButton>
					)}
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductItem;
