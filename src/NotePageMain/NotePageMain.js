import React, { Component } from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import { findNote } from '../NotesHelpers'
import NotesContext from '../contexts/NotesContext'

class NotePageMain extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = NotesContext;
    
      handleDeleteNote = noteId => {
        this.props.history.push(`/`)
      }
      render() {
        const { notes=[] } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || { content: '' }
        return (
          <section className='NotePageMain'>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
              onDeleteNote={this.handleDeleteNote}
            />
            <div className='NotePageMain__content'>
              {note.content.split(/\n \r|\n/).map((para, i) =>
                <p key={i}>{para}</p>
              )}
            </div>
          </section>
        )
      }
    }
    export default NotePageMain;