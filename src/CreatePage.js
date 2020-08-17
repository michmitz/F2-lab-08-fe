import React, { Component } from 'react'
import { createGemstone, fetchCuts } from './gemstones-api'
import './App.css'

export default class CreatePage extends Component {
    state = {
        name: '',
        color: '',
        weight: 1,
        is_precious: false,
        cut_id: 1,
        cuts: []
    }

    componentDidMount = async () => {
        const cutsData = await fetchCuts()
    
        this.setState({
          cuts: cutsData.body
        })
      }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        await createGemstone({
            name: this.state.name,
            color: this.state.color,
            weight: this.state.weight,
            is_precious: this.state.is_precious,
            cut_id: this.state.cut_id
        });

        this.setState({
            name: '',
            color: '',
            weight: 1,
            is_precious: false,
            cut_style: ''
        })

        this.props.history.push('/');
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    
    handleColorChange = (e) => {
        this.setState({ color: e.target.value });
    }

    handleWeightChange = (e) => {
        this.setState({ weight: e.target.value });
    }

    handlePrecious = (e) => {
        this.setState({ is_precious: true });
    }

    handleCutChange = (e) => {
        this.setState({ cuts_id: e.target.value })
    }
    
    
    render() {
        return (
            <section className="App-section">
            <div className="add-a-gemstone-div">
                <h2>ADD A GEMSTONE</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={this.handleNameChange} type="text" value={this.state.name}/>
                    </label>
                    <label>
                        Color
                        <select onChange={this.handleColorChange} value={this.state.color}>
                            <option value='Red'>Red</option>
                            <option value='Clear'>Clear</option>
                            <option value='Green'>Green</option>
                            <option value='Blue'>Blue</option>
                            <option value='Purple'>Purple</option>
                            <option value='Orange'>Orange</option>
                            <option value='Yellow'>Yellow</option>
                            <option value='Pink'>Pink</option>
                            <option value='Other'>Other</option>
                        </select>
                    </label>
                    <label>
                        Weight
                        <input onChange={this.handleWeightChange} type="number" value={this.state.weight}/>
                    </label>
                    <label>
                        Cut Style
                        <select onChange={this.handleCutChange} value={this.state.cut_id}>
                            {
                                this.state.cuts.map((cut) => <option value={cut.cut_id}>{cut.cut_style}</option>)
                            }
                        </select>
                    </label>
                    <label>
                        Is it Precious?
                        <input type="checkbox" onChange={this.handlePrecious}/>
                    </label>
                    <button>Add to Treasure Chest</button>
                </form>
            </div>
            </section>
        )
    }
}
