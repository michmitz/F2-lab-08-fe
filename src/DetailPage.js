import React, { Component } from 'react'
import { fetchGemstone, deleteGemstone, fetchCuts, updateGemstone } from './gemstones-api.js'

export default class DetailPage extends Component {
    state = {
        gemstone: {},
        name: '',
        color: '',
        weight: 1,
        is_precious: false,
        cut_id: 1,
        cuts: []
    }

    componentDidMount = async () => {
        const data = await fetchGemstone(this.props.match.params.id);
        const cutsData = await fetchCuts();

        console.log(data)

        const matchingCut = cutsData.body.find(cut => cut.cut_style === data.body.cut_style);

        console.log(matchingCut)
    
        this.setState({
          cuts: cutsData.body,
          name: data.body.name,
          color: data.body.color,
          weight: data.body.weight,
          is_precious: data.body.is_precious,
          cut: matchingCut.id,
          gemstone: data.body

        })
      }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
        
            await updateGemstone(this.props.match.params.id, {
            name: this.state.name,
            color: this.state.color,
            weight: this.state.weight,
            is_precious: this.state.is_precious,
            cut_id: this.state.cut_id
        });

        const updatedGemstone = await fetchGemstone(this.props.match.params.id)

        this.setState({
            name: '',
            color: '',
            weight: 1,
            is_precious: false,
            cut_style: '',
            cut_id: 1,
            gemstone: updatedGemstone.body
        });

        } catch (e) {
            console.log(e.message)
        }
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
        this.setState({ cut_id: e.target.value })
    }
    
    handleDelete = async () => {
        await deleteGemstone(this.props.match.params.id);
    
        this.props.history.push('/');
    }
    
    render() {
        return (
            <section className="general-divider">
            <div className='details'>
                <h2>Gem Details</h2>
                <p>Name: {this.state.gemstone.name}</p>
                <p>Color: {this.state.gemstone.color}</p>
                <p>Weight: {this.state.gemstone.weight}</p>
                <p>Precious: {this.state.gemstone.is_precious ? 'Yes' : 'No'}</p>
                <p>Cut Style: {this.state.gemstone.cut_style}</p>
            </div>
            <div className="update-a-gemstone-div">
                <h2>UPDATE THIS GEMSTONE?</h2>
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
                                this.state.cuts.map((cut) => <option value={cut.id}>{cut.cut_style}</option>)
                            }
                        </select>
                    </label>
                    <label>
                        Is it Precious?
                        <input type="checkbox" onChange={this.handlePrecious}/>
                    </label>
                    <button className="update-button">Update!</button>
                    <button className="delete-button" onClick={this.handleDelete}>Delete?</button> 
                </form>
            </div>
            </section>
        )
    }
}

    
