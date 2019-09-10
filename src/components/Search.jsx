import React, { useState } from "react";
import { Form, Input } from "reactstrap";

const Search = ({ searchHandler }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchValueUpdateHandler = evt => {
    setSearchValue(evt.target.value);
  };
  const formSubmitHandler = evt => {
    evt.preventDefault();
    if (searchValue.replace(/\s/, "").length > 0) {
      searchHandler(searchValue);
      setSearchValue("");
    }
    //TODO: Implement msg error
  };
  return (
    <Form className="search-form">
      <Input
        type="text"
        value={searchValue}
        onChange={searchValueUpdateHandler}
      ></Input>
      <Input type="Submit" value="Search" onClick={formSubmitHandler}></Input>
    </Form>
  );
};

export default Search;
