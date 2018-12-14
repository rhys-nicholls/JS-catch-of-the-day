import React, { Component } from "react";

// Import Components
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";

import base from "../base";
import sampleFishes from "../sample-fishes";

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. Create copy of state
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fishes odject
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Create copy of state
    const fishes = { ...this.state.fishes };
    // 2. Update state
    fishes[key] = updatedFish;
    // 3. Set state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. Create copy of state
    const fishes = { ...this.state.fishes };
    // 2. Update state. Fish is updated to null to ensure deletion from firebase db
    fishes[key] = null;
    // 3. Set state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Create copy of state
    const order = { ...this.state.order };
    // 2. Add to order, or update number in order
    order[key] = order[key] + 1 || 1;
    // 3. Update state
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. Create copy of state
    const order = { ...this.state.order };
    // 2. Remove item from order
    delete order[key];
    // 3. Update state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                fishDetails={this.state.fishes[key]}
                addToOrder={this.addToOrder}
                removeFromOrder={this.removeFromOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
