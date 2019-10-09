import React, { Component } from 'react';
import ValidationError from '../ValidationError';


class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
              value: '',
              touched: false
            },
        }
        const { name } = this.state;

        console.log('Name: ', name.value);
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 3) {
            return 'Name must be at least three characters long.';
        }
    }
    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }
    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state;
        console.log('Name: ', name.value);
    }
    render() {
        const nameError = this.validateName();
        return (
            <form className="AddFolder" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add Folder</h2>
                <div className="folder-name">
                    <label htmlFor = "name">Folder Name</label>
                    <input type="text" className="new-folder" name="name" id="name" onChange={e => this.updateName(e.target.value)} />
                    {this.state.name.touched && (
                    <ValidationError message={nameError}/>
                    )}
                </div>
                <div className="new-folder__buttons">
                <button type="submit" className="new-folder__button" disabled={this.validateName()}>
                    Save
                </button>
                <button type="reset" className="new-folder__button">
                    Cancel
                </button>
                </div>
            </form>
            
        )
    }
} 
export default AddFolder;