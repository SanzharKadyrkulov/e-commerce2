import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BaseLayout from "../Layouts/BaseLayout/BaseLayout";

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<BaseLayout>
						<HomePage />
					</BaseLayout>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
