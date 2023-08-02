import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import ProductContext from "./contexts/ProductContext/ProductContext";
import AuthContext from "./contexts/AuthContext/AuthContext";

function App() {
	return (
		<BrowserRouter>
			<ProductContext>
				<AuthContext>
					<AppRoutes />
				</AuthContext>
			</ProductContext>
		</BrowserRouter>
	);
}

export default App;
