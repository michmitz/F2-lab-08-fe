/* eslint-disable */
import React from 'react';
import { fetchGemstones } from './gemstones-api.js';
import './App.css';

class App extends React.Component {
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
              return <div className="gemstones-div">
                {stone.color} : {stone.weight}
              </div>
            })
          }
        </header>
        </div>
    )
}
}

export default App;