import React, { Component } from 'react'

const NoteListContext = React.createContext({
  NoteList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setNoteList: () => {},
})
export default NoteListContext

export class NoteListProvider extends Component {
  state = {
    thingList: [],
    error: null,
  };

  setNoteList = NoteList => {
    this.setState({ NoteList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      noteList: this.state.noteList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setNoteList: this.setNoteList,
    }
    return (
      <NoteListContext.Provider value={value}>
        {this.props.children}
      </NoteListContext.Provider>
    )
  }
}
