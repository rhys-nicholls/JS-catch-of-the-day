import React, { Component } from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../helpers";

export default class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.bool
    }),
    addToOrder: PropTypes.func
  };

  handleClick = params => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.fishDetails;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!status} onClick={this.handleClick}>
          {status ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}
