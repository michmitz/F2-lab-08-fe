import React, { Component } from 'react'

export default class CreatePage extends Component {
    render() {
        return (
            <div>
                <h2>ADD A GEMSTONE</h2>
                <form>
                    <label>
                        Name
                        <input type="text"/>
                    </label>
                    <label>
                        Color
                        <input type="text"/>
                    </label>
                    <label>
                        Weight
                        <input type="number"/>
                    </label>
                    <label>
                        Precious?
                        <input type="radio" name="precious" value="yes"/>
                        <input type="radio" name="precious" value="no"/>
                    </label>
                    <button>Add to Treasure Chest</button>
                </form>
            </div>
        )
    }
}
