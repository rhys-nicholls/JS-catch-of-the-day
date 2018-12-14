import React, { Component } from "react";

export default class EditFishForm extends Component {
  handleChange = event => {
    // 1. Take copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // 2. Update fish 
    this.props.updateFish(this.props.index, updatedFish);
  };

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
      </div>
    );
  }
}
