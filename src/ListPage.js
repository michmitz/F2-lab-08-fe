/* eslint-disable */
import React from 'react';
import { fetchGemstones, createGemstone } from './gemstones-api.js';
import './App.css';
import { Link } from 'react-router-dom'

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
              return <Link to={`detail/${stone.id}`}  className="gemstones-div" key={`{stone.id}-{stone.color}`}>
                <div>Name: {stone.name}</div>
                <div>Weight: {stone.weight}</div>
                <div>Color: {stone.color}</div>
                <div>Precious: {stone.is_precious ? 'Yes' : 'No'}</div>
              </Link>
            })
          }
        </header>
        </div>
    )
}
}

export default ListPage;