import React, { Component } from "react";
import styled from "styled-components";
import DisplayFood from "./DisplayFood";
import Food from "../Food.json";

const SearchBox = styled.input`
  margin: 1em;
  font-size: 1em;
`;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      items: [...Food],
      searchedItem: "",
      ItemsList: [...Food],
    };
  }
  searchItem = (e) => {
    if(e.target.value===""){
      this.setState({ ItemsList: [...Food] });
    }
    else{
      const searchedItems = this.state.items.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ ItemsList: searchedItems });
    }
  };
  render() {
    return (
      <div>
        <SearchBox
          type="search"
          placeholder="Enter Food"
          onChange={this.searchItem}
        />
        <DisplayFood items={this.state.ItemsList} />
      </div>
    );
  }
}

export default Search;
