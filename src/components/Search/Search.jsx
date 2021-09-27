import React, { useState } from "react";
import { Box, TextField, Stack } from "@mui/material/";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getSearch } from "./actions";

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const handleClick = () => {
    dispatch(getSearch(input));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <TextField
            onChange={(e) => setInput(e.target.value)}
            id="outlined-search"
            label="Search..."
            type="search"
          />
          <Stack
            style={{ height: 50, display: "flex", alignSelf: "center" }}
            direction="row"
          >
            <Button
              onClick={() => handleClick()}
              style={{ backgroundColor: "#2F6AFA", color: "white" }}
              variant="contained"
            >
              Search
            </Button>
          </Stack>
        </div>
      </Box>
    </>
  );
};

export default Search;
