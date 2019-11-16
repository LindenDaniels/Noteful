import React, { Component } from 'react'

const FolderListContext = React.createContext({
  notes: [],
  folder: [],
  folders: [],
  NoteList: [],
  FolderList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setFolderList: () => {},
  setFolder: () => {},
})
export default FolderListContext

export class FolderListProvider extends Component {
  state = {
    folder: [],
    folders: [],
    FolderList: [],
    error: null,
  };

  setFolderList = FolderList => {
    this.setState({ FolderList })
  }

  setFolder = folder => {
      this.setState({ folder })
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
      FolderList: this.state.FolderList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFolderList: this.setFolderList,
    }
    return (
      <FolderListContext.Provider value={value}>
        {this.props.children}
      </FolderListContext.Provider>
    )
  }
}
