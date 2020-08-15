import React, { Component } from 'react'
import { fetchGemstone, deleteGemstone } from './gemstones-api.js'

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

    handleDelete = async () => {
        await deleteGemstone(this.props.match.params.id);

        this.props.history.push('/');
    }
    
    
    render() {
        return (
            <section className='App-section'>
            <div className='details'>
                <p>Name: {this.state.gemstone.name}</p>
                <p>Color: {this.state.gemstone.color}</p>
                <p>Weight: {this.state.gemstone.weight}</p>
                <p>Precious: {this.state.gemstone.is_precious ? 'Yes' : 'No'}</p>
                <p>Cut Style: {this.state.gemstone.cut_style}</p>
                <button onClick={this.handleDelete}>Delete?</button> 
            </div>
            </section>
        )
    }
}
