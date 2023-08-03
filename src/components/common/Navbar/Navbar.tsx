import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LiveSearch from "../LiveSearch/LiveSearch";
import { authContext } from "../../../contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../../contexts/AuthContext/types";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const { user, logout, isAdmin } = React.useContext(
		authContext
	) as IAuthContextTypes;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component={Link}
						to="/"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						MUI
					</Typography>

					<Box sx={{ flexGrow: 1, display: "flex", ml: 2 }}>
						<Button
							onClick={() =>
								location.pathname !== "/catalog" && navigate("/catalog")
							}
							sx={{ color: "white" }}
						>
							Catalog
						</Button>
						{isAdmin() && (
							<Button component={Link} to="/add" sx={{ color: "white" }}>
								Add
							</Button>
						)}
					</Box>

					<LiveSearch />

					<IconButton component={Link} to="/cart">
						<ShoppingCartIcon sx={{ color: "white" }} />
					</IconButton>

					{user ? (
						<Box display="flex" alignItems="center" px={2} gap={1}>
							<Typography>{user.email}</Typography>
							<Button sx={{ color: "white" }} onClick={logout}>
								Logout
							</Button>
						</Box>
					) : (
						<Button component={Link} to="/auth" sx={{ color: "white" }}>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
