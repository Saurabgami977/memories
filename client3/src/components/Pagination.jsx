import React, { useEffect } from "react";

import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../store/actions/posts";
import useStyles from "./styles";

const Paginate = ({ page }) => {
	const { numberOfPage } = useSelector((state) => state.posts);
	const { currentPage } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (page) {
			dispatch(getPosts(page));
		}
	}, [page]);
	const classes = useStyles();
	return (
		<div>
			<Pagination
				classes={{ ul: classes.ul }}
				count={numberOfPage}
				page={Number(page) || 1}
				variant="outlined"
				color="primary"
				renderItem={(item) => (
					<PaginationItem
						{...item}
						component={Link}
						to={`/posts?page=${item.page}`}
					/>
				)}
			/>
		</div>
	);
};

export default Paginate;
