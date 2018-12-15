import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class EditFishForm extends Component {

  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.bool
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  handleChange = event => {
    // 1. Take copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // 2. Update fish 
    this.props.updateFish(this.props.index, updatedFish);
  };

  handleDelete = () => {
    this.props.deleteFish(this.props.index);
  }

  render() {
    const { image, name, price, desc, status } = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select name="status" value={status} onChange={this.handleChange}>
          <option value="true"> Fresh</option>
          <option value="false">Sold Out</option>
        </select>
        <textarea name="desc" value={desc} onChange={this.handleChange} />
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={this.handleDelete}>Remove Fish</button>
      </div>
    );
  }
}
