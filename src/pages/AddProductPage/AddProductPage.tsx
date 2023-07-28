import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextType } from "../../contexts/ProductContext/types";
import { TCategory } from "../../models/product";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddProductPage() {
	const { addProduct } = React.useContext(
		productContext
	) as IProductContextType;
	const [formValue, setFormValue] = React.useState({
		title: "",
		description: "",
		price: "",
		image: "",
		category: "t-shirt",
	});

	function handleChange(
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| SelectChangeEvent<string>
	) {
		console.log(e);

		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			!formValue.title.trim() ||
			!formValue.description.trim() ||
			!formValue.price.trim() ||
			!formValue.image.trim()
		) {
			alert("fill all fields");
			return;
		}

		addProduct({
			...formValue,
			price: +formValue.price,
			category: formValue.category as TCategory,
		});

		setFormValue({
			title: "",
			description: "",
			price: "",
			image: "",
			category: "t-shirt",
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						New Product
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							label="Title"
							name="title"
							autoFocus
							value={formValue.title}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="description"
							label="Description"
							value={formValue.description}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							type="number"
							name="price"
							label="Price"
							value={formValue.price}
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="image"
							label="Image"
							value={formValue.image}
							onChange={handleChange}
						/>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Category</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="category"
								label="Category"
								value={formValue.category}
								onChange={handleChange}
							>
								<MenuItem value={"t-shirt"}>T-shirt</MenuItem>
								<MenuItem value={"pants"}>Pants</MenuItem>
								<MenuItem value={"shoe"}>Shoe</MenuItem>
							</Select>
						</FormControl>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Add New Product
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
