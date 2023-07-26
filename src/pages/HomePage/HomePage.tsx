import React, { useContext } from "react";
import {
	IProductContextType,
	productContext,
} from "../../contexts/ProductContext";

const HomePage = () => {
	const {
		counter,
		increment,
		decrement,
		color,
		changeColor,
		fontSize,
		changeFontSize,
	} = useContext(productContext) as IProductContextType;

	return (
		<div>
			<button onClick={decrement}>minus</button>
			<button onClick={increment}>plus</button>
			<button onClick={changeColor}>Change color</button>
			<input
				value={fontSize}
				type="text"
				onChange={(e) => changeFontSize(e.target.value)}
			/>
			<h1 style={{ color, fontSize: `${fontSize}px` }}>{counter}</h1>
		</div>
	);
};

export default HomePage;
