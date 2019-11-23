import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


import './NoteList.css'
import NotefulContext from '../contexts/NotefulContext'
import Note from '../Note/Note'
import { getNotesForFolder } from '../NotesHelpers'
import CircleButton from '../CircleButton/CircleButton'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faPlus);


export default class NoteList extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotefulContext;

  render() {
    const { folderId } = this.props.match.params
    const { notes=[] } = this.context
    const notesForFolder = getNotesForFolder(notes, folderId)
    return (
      <section className='NoteListMain'>
        <ul id="note__list">
          {notesForFolder.map(note => 
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
              
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'>
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </CircleButton>
          
        </div>
      </section>
    )
  }

}


NoteList.propType = {
  match: PropTypes.object.isRequired
};