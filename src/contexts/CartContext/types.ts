import { ICartProduct } from "../../models/cart";
import { IProduct } from "../../models/product";

export interface ICart {
	products: ICartProduct[];
	totalPrice: number;
}

export interface ICartContextTypes {
	cart: ICart;
	getCart: () => void;
	addProductToCart: (product: IProduct) => void;
	deleteProductFromCart: (id: number) => void;
	isAlreadyInCart: (id: number) => boolean;
	increaseCount: (id: number) => void;
	decreaseCount: (id: number) => void;
	clearCart: () => void;
}
