import React, { useState } from "react";
import { Box, TextField, Stack } from "@mui/material/";
import Button from "@material-ui/core/Button";
import "./Search.scss";

const Search = ({ handleSearchData }) => {
  const [search, setSearch] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    handleSearchData(search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
      e.preventDefault();
      handleSearchData(search);
    }
  };

  return (
    <>
      <Box
        onKeyPress={(e) => handleKeyPress(e)}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="search-wrapper">
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            id="outlined-search"
            label="Search..."
            type="search"
          />
          <Stack className="stack-style" direction="row">
            <Button
              onClick={(e) => handleClick(e)}
              className="button-style"
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
