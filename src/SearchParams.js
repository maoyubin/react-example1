import React from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
  handlerSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handlerSearchSubmit}/>
      </div>
    );
  }
}

export default SearchParams;
