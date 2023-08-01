import { Pagination as MuiPagination } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../contexts/ProductContext/ProductContext";
import { IProductContextType } from "../../../contexts/ProductContext/types";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../../utils/consts";

const Pagination = () => {
	const { page, setPage, pageTotalCount } = useContext(
		productContext
	) as IProductContextType;

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams({
			_page: page.toString(),
			_limit: LIMIT.toString(),
		});
	}, [page]);

	return (
		<MuiPagination
			count={pageTotalCount}
			page={page}
			color="primary"
			onChange={(_, value) => setPage(value)}
		/>
	);
};

export default Pagination;
