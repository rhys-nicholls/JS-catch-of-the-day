import React, { Component } from "react";
import PropTypes from "prop-types";

import { getFunName } from "../helpers";

export default class StorePicker extends Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  gotToStore = event => {
    // 1. Stop the page from submitting
    event.preventDefault();
    // 2. Get the text from input
    const storeName = this.myInput.value.value;
    // 3. Route to the store requested
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.gotToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
