import React, { FC } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const BaseLayout: FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default BaseLayout;
