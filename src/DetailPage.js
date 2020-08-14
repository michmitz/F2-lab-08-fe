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
            <div>
                <p>Name: {this.state.gemstone.name}</p>
                <p>Color: {this.state.gemstone.color}</p>
                <p>Weight: {this.state.gemstone.weight}</p>
                <p>Is it precious? {this.state.gemstone.is_precious}</p> 
            </div>
        )
    }
}
