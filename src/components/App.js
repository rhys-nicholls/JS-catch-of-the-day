import React, { Component } from "react";

// Import Components
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

import sampleFishes from '../sample-fishes';

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addFish = fish => {
    // 1. Create copy of state
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fishes odject
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
