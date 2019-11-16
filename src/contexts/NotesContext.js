import React, { Component } from 'react'

export const nullNote = {
    name: {},
    folder: [],
    modified: [],
    content: [],
  }

const NotesContext = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {},
    addFolder: () => {},
    addNote: () => {}
})

export class NotesContextProvider extends Component {
    state = {
      note: nullNote,
      error: null,
    };
  
    deleteNote = noteId => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    };

    addFolder = folder => {
        this.setState({
            folders: [...this.state.folders, folder]
        })
        
    };

    addNote = note => {
        this.setState({
            notes: [...this.state.notes, note]
        })
        
    };
  
    render() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.handleDeleteNote,
            addFolder: this.handleAddFolder,
            addNote: this.handleAddNote
        }
      return (
        <NotesContext.Provider value={contextValue}>
          {this.props.children}
        </NotesContext.Provider>
      )
    }
  }
  

export default NotesContext;
