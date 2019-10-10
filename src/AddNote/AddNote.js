import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import NotesContext from '../NotesContext';
import config from '../config'
import { findFolder } from '../NotesHelpers'


class AddNote extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: {
              value: '',
              touched: false
            },
            folder: {
                value: '',
                touched: false
            }
        }
        const { name, folder } = this.state;

        console.log('Name: ', name.value);
        console.log('Folder', folder.name)
    }
    static contextType = NotesContext;
    static defaultProps = {
        match: {
            params: {}
        }
    }


    handleSubmit = e => {
        e.preventDefault()
        const { name, folder, content } = e.target;
        
        const note = {
            name: name.value,
            folder: folder.name,
            content: content.value
        }
        this.setState({ error: null })
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
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
            folder.name= ' '
            folder.id = ' '
            content.value = ' '
            this.context.addNote(data)
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
    }
}
    updateFolder(folder) {
        this.setState({name: {value: folder}});
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
        const { folderId } = this.props.match.params
        const { folders=[] } = this.context
        const folder = findFolder(folders, folderId)
        const nameError = this.validateName();
        return (
            <form className="add-note" onSubmit={e => this.handleSubmit(e)}>
                <h2>New Note</h2>
                <div className="note-inputs">
                    <label htmlFor = "name">Note Name</label>
                    <input type="text" className="new-note" name="name" id="name" onChange={e => this.updateName(e.target.value)} />
                    {this.state.name.touched && (
                    <ValidationError message={nameError}/>
                    )}
                    <label htmlFor="folder">Select a Folder</label>
                    <select onChange={e => this.updateFolder(e.target.value)}>
                        {folder && (
                            <option key={folder.id} value={folder.name}>
                                {folder.name}
                            </option>
                        )}
                    </select>

                </div>
                <div className="new-note__buttons">
                <button type="submit" className="new-note__button" disabled={this.validateName()}>
                    Save
                </button>
                <button type="button" className="new-note__button" onClick={this.handleClickCancel}>
                 Cancel
                </button>
                </div>
            </form>
            
        )
    }
} 


export default AddNote;