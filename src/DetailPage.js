import React, { Component } from 'react'
import { fetchGemstone } from './gemstones-api.js'

export default class DetailPage extends Component {
    state = {
        gemstone: {}
    }

    componentDidMount = async () => {
        const data = await fetchGemstone(this.props.match.params.id)
    
        this.setState({
          gemstone: data.body
        })
      }
    
    
    render() {
        return (
            <section className='App-section'>
            <div className='details'>
                <p>Name: {this.state.gemstone.name}</p>
                <p>Color: {this.state.gemstone.color}</p>
                <p>Weight: {this.state.gemstone.weight}</p>
                <p>Precious: {this.state.gemstone.is_precious ? 'Yes' : 'No'}</p> 
            </div>
            </section>
        )
    }
}
