import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import NotesContext from '../NotesContext';
import config from '../config'
import { withRouter } from 'react-router'
import NotefulForm from '../NotefulForm/NotefulForm'


class AddNote extends Component {
   
    static contextType = NotesContext;
    static defaultProps = {
        match: {
            params: {  }
        }
     
    }
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
            },
            content: {
                value: ''
            }
        }
    }

    
    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([foldersRes]) => {
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));
                return Promise.all([foldersRes.json()]);
            })
            .then(([folder]) => {
                this.setState({folder});
            })
            .catch(error => {
                console.error({error});
            });
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, folder, content } = this.state;
        let f = document.getElementById('folder-select')
        let selectedFolder = f.options[f.selectedIndex].value;
       
        
        const note = {
            name: name.value,
            folder: selectedFolder.value,
            content: e.target['note-content'].value
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
            content.value = ' '
            folder.value = ' '
            this.context.addNote(data)
            this.props.history.push(`/folders/${selectedFolder}`)
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
        this.setState({folder: {value: folder}});
    }
    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    render() {
        const nameError = this.validateName();
        return (
            <NotefulForm className="add-note" onSubmit={e => this.handleSubmit(e)}>
                <h2>New Note</h2>
                <div className="note-inputs">
                    <label htmlFor = "name">Note Name</label>
                    <input type="text" className="new-note" name="name" id="name" onChange={e => this.updateName(e.target.value)} />
                    {this.state.name.touched && (
                    <ValidationError message={nameError}/>
                    )}
                    <label htmlFor="folder">Select a Folder</label>
                    <select id="folder-select">
                    {this.state.folder && this.context.folders.map(folder => (
                            <option key={folder.id} value={folder.id} onChange={e => this.updateFolder(e.target.value)}>
                                {folder.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="note-content">Content</label>
                    <textarea type="text" className="note-content" name="note-content" id="note-content" />

                </div>
                <div className="new-note__buttons">
                <button type="submit" className="new-note__button" disabled={this.validateName()}>
                    Save
                </button>
                <button type="button" className="new-note__button" onClick={this.handleClickCancel}>
                 Cancel
                </button>
                </div>
            </NotefulForm>
            
        )
    }
} 


export default withRouter(AddNote);