/* eslint-disable */
import React from 'react';
import { fetchGemstones, createGemstone } from './gemstones-api.js';
import './App.css';

class ListPage extends React.Component {
  state = {
    gemstones: [] 
  }

  componentDidMount = async () => {
    const data = await fetchGemstones()

    this.setState({
      gemstones: data.body
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Gemstones:</h2>
          {
            this.state.gemstones.map((stone) => {
              return <div className="gemstones-div" key={`{stone.id}-{stone.color}`}>
                <div>Name: {stone.name}</div>
                <div>Weight: {stone.weight}</div>
                <div>Color: {stone.color}</div>
                <div>Precious: {stone.is_precious ? 'Yes' : 'No'}</div>
              </div>
            })
          }
        </header>
        </div>
    )
}
}

export default ListPage;