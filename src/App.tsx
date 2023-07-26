import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import ProductContext from "./contexts/ProductContext/ProductContext";

function App() {
	return (
		<BrowserRouter>
			<ProductContext>
				<AppRoutes />
			</ProductContext>
		</BrowserRouter>
	);
}

export default App;
