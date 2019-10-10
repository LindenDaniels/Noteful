import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import NotesContext from '../NotesContext';
import config from '../config'


class AddFolder extends Component {
    static contextType = NotesContext;

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

    handleSubmit = e => {
        e.preventDefault()
        const { name } = e.target;
        const folder = {
            name: name.value
        }
        this.setState({ error: null })
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'content-type': 'application/json'

            }
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        }).then(data => {
            name.value = ' '
            this.context.addFolder(data)
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error)
            this.setState({error})
        })
    }
    

    handleClickCancel = () => {
        this.props.history.push('/')
    };

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
                <button type="button" className="new-folder__button" onClick={this.handleClickCancel}>
                 Cancel
                </button>
                </div>
            </form>
            
        )
    }
} 
export default AddFolder;