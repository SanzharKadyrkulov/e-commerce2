import { IProduct } from "./product";

export interface ICartProduct extends IProduct {
	count: number;
	subPrice: number;
}
