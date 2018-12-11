import React, { Component } from "react";

// Import Components
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";

import sampleFishes from "../sample-fishes";

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Create copy of state
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fishes odject
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
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
              />
            ))}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
          />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
