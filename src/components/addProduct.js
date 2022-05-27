import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

import StarIcon from "@mui/icons-material/Star";

import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const axios = require("axios");

const theme = createTheme();

const labels = {
  1: "Useless+",

  2: "Poor+",

  3: "Ok+",

  4: "Good+",

  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function AddProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState("");

  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  const validateFields = () => {
    if (name === "") {
      setNameError("Name Cannot be blank");
      return false;
    } else {
      setNameError("");
    }

    if (price === "") {
      setPriceError("Price cannot be blank");
      return false;
    } else {
      setPriceError("");
    }
    if (description === "") {
      setDescriptionError("descriptiom cannot be blank");
      return false;
    } else {
      setDescriptionError("");
    }
    return true;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("login clicked");
      let data = JSON.stringify({
        name,
        price,
        description,
        category,
        ratings,
      });

      axios
        .post(
          "https://mern-task-searchingyard.herokuapp.com/api/v1/product/add",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response.data);
          alert("Uploaded Succesfully");
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Add Product Details
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <label>Name..</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter Name"
              name="name"
              error={!!nameError}
              helperText={nameError}
              variant={"outlined"}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <label>Description..</label>
            <TextField
              margin="normal"
              required
              fullWidth
              error={!!descriptionError}
              helperText={descriptionError}
              variant={"outlined"}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              label="Enter Descripton"
              type="description"
              id="description"
            />

            <label>Price..</label>
            <TextField
              margin="normal"
              required
              fullWidth
              error={!!priceError}
              helperText={priceError}
              variant={"outlined"}
              name="price"
              label="Enter Price of the Product"
              type="number"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label>Choose a Category of the Product</label>
            <p></p>

            <Select
              margin="normal"
              required
              fullWidth
              type="category"
              name="category"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="footwear">Footwear</MenuItem>
              <MenuItem value="home & furniture">home & furniture</MenuItem>
            </Select>
            <label>Give the Product a Rating</label>
            <p></p>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setRatings(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>

            <Button
              onClick={handleClick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product Data
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddProduct;
