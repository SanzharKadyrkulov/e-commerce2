import React, { FC, createContext, useReducer } from "react";
import { IInitState, IProductContextType, TProductAction } from "./types";
import { API } from "../../utils/consts";
import axios from "axios";
import { IProduct, IProductCreate } from "../../models/product";

export const productContext = createContext<IProductContextType | null>(null);

interface IProductContext {
	children: React.ReactNode;
}

const initState: IInitState = {
	products: [],
	product: null,
};

function reducer(state: IInitState, action: TProductAction) {
	switch (action.type) {
		case "products":
			return { ...state, products: action.payload };
		case "product":
			return { ...state, product: action.payload };
		default:
			return state;
	}
}

const ProductContext: FC<IProductContext> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	async function getProducts() {
		const { data } = await axios.get<IProduct[]>(API);

		dispatch({
			type: "products",
			payload: data,
		});
	}

	async function getOneProduct(id: number) {
		const { data } = await axios.get(`${API}/${id}`);

		dispatch({
			type: "product",
			payload: data,
		});
	}

	async function addProduct(newProduct: IProductCreate) {
		await axios.post(API, newProduct);
	}

	async function deleteProduct(id: number) {
		await axios.delete(`${API}/${id}`);
		getProducts();
	}

	const value = {
		products: state.products,
		product: state.product,
		getProducts,
		addProduct,
		deleteProduct,
		getOneProduct,
	};
	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
};

export default ProductContext;
