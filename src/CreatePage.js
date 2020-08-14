import React, { Component } from 'react'
import { createGemstone } from './gemstones-api'
import './App.css'

export default class CreatePage extends Component {
    state = {
        name: '',
        color: '',
        weight: 1,
        is_precious: false
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        await createGemstone({
            name: this.state.name,
            color: this.state.color,
            weight: this.state.weight,
            is_precious: this.state.is_precious
        });

        this.setState({
            name: '',
            color: '',
            weight: 1,
            is_precious: false
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
                            <option value='red'>Red</option>
                            <option value='clear'>Clear</option>
                            <option value='green'>Green</option>
                            <option value='blue'>Blue</option>
                            <option value='purple'>Purple</option>
                            <option value='orange'>Orange</option>
                            <option value='yellow'>Yellow</option>
                            <option value='pink'>Pink</option>
                            <option value='other'>Other</option>
                        </select>
                    </label>
                    <label>
                        Weight
                        <input onChange={this.handleWeightChange} type="number" value={this.state.weight}/>
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
