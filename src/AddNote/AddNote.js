import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NotesContext from '../NotesContext'
import config from '../config'
import './AddNote.css'
import PropTypes from 'prop-types';

export default class AddNote extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = NotesContext;
  
  handleClickCancel = () => {
    this.props.history.push('/')
};

  handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      name: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folderId: e.target['note-folder-id'].value,
      modified: new Date(),
    }
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        this.context.addNote(note)
        this.props.history.push(`/folder/${note.folderId}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { folders=[] } = this.context
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input type='text' id='note-name-input' name='note-name' required />
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea id='note-content-input' name='note-content' />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select id='note-folder-select' name='note-folder-id' required>
              {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add note
            </button>
            <button type="button" className="new-note__button" onClick={this.handleClickCancel}>
                 Cancel
                </button>
          </div>
        </NotefulForm>
      </section>
    )
  } 
}

AddNote.propTypes = {
    history: PropTypes.object.isRequired
};
