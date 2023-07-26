import React, { FC } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Hero from "../../components/common/Hero/Hero";

type BaseLayoutProps = {
	children: React.ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			{/* <Hero /> */}
			{children}
		</>
	);
};

export default BaseLayout;
