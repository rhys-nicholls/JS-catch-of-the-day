import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="top">
          <h1>Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">The</span>
            </span>
            Day
           </h1>
          <h3 className="tagline">
            <span>Fresh Seafood Market</span>
          </h3>
        </header>
    )
  }
}
