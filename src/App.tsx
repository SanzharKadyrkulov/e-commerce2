import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import ProductContext from "./contexts/ProductContext/ProductContext";
import AuthContext from "./contexts/AuthContext/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import Toastify from "./components/common/Toastify/Toastify";

function App() {
	return (
		<BrowserRouter>
			<ProductContext>
				<AuthContext>
					<Toastify />
					<AppRoutes />
				</AuthContext>
			</ProductContext>
		</BrowserRouter>
	);
}

export default App;
