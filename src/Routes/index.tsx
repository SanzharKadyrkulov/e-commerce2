import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BaseLayout from "../Layouts/BaseLayout/BaseLayout";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<BaseLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/add" element={<AddProductPage />} />
				<Route path="/details/:id" element={<DetailsPage />} />
				<Route path="/edit/:id" element={<EditProductPage />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
