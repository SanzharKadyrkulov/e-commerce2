import React, { FC, createContext, useReducer } from "react";
import { IProduct } from "../models/product";

export interface IProductContextType {
	counter: number;
	color: string;
	fontSize: string;
	increment: () => void;
	decrement: () => void;
	changeColor: () => void;
	changeFontSize: (size: string) => void;
}

export const productContext = createContext<IProductContextType | null>(null);

interface IProductContext {
	children: React.ReactNode;
}

interface IInitState {
	products: IProduct[];
	product: IProduct | null;
	counter: number;
	color: string;
	fontSize: string;
}

const initState: IInitState = {
	products: [],
	product: null,
	counter: 0,
	color: "black",
	fontSize: "24",
};

interface IProductsAction {
	type: "products";
	payload: IProduct[];
}
interface IProductAction {
	type: "product";
	payload: IProduct;
}
interface ICounterAction {
	type: "counter";
	payload: number;
}
interface IColorAction {
	type: "color";
	payload: string;
}
interface IFontSizeAction {
	type: "font";
	payload: string;
}

type TProductAction =
	| IProductsAction
	| IProductAction
	| ICounterAction
	| IColorAction
	| IFontSizeAction;

function reducer(state: IInitState, action: TProductAction) {
	switch (action.type) {
		case "products":
			return { ...state, products: action.payload };
		case "product":
			return { ...state, product: action.payload };
		case "counter":
			return { ...state, counter: action.payload };
		case "color":
			return { ...state, color: action.payload };
		case "font":
			return { ...state, fontSize: action.payload };
		default:
			return state;
	}
}

const ProductContext: FC<IProductContext> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	function increment() {
		dispatch({
			type: "counter",
			payload: state.counter + 1,
		});
	}
	function decrement() {
		dispatch({
			type: "counter",
			payload: state.counter - 1,
		});
	}

	function changeColor() {
		const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
		dispatch({
			type: "color",
			payload: randomColor,
		});
	}

	function changeFontSize(size: string) {
		console.log(size);

		dispatch({
			type: "font",
			payload: size,
		});
	}

	const value = {
		counter: state.counter,
		color: state.color,
		fontSize: state.fontSize,
		increment,
		decrement,
		changeColor,
		changeFontSize,
	};
	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
};

export default ProductContext;
