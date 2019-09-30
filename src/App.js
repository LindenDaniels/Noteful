import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FolderList from './FolderList/FolderList';
import MainSideBar from './MainSideBar/MainSideBar';
import Note from './Note/Note';
import NoteSideBar from './NoteSideBar/NoteSideBar';
import Sidebar from './SideBar/SideBar';
import Folder from './Folder/Folder';
import NoteList from './NoteList/NoteList';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>Note List</Link>
        </nav>
        <header>
          <h1>Notebook</h1>
        </header>
        <Sidebar>
          <Route 
            path='/' 
            component={MainSideBar}
          />
          <Route
            path='/folder'
            component={NoteSideBar}
          />
        </Sidebar>
        <main>
          <Route 
            exact path='/'
            render={(routerProps) =>
            <NoteList
              note={this.state.notes.find(note => note.id === routerProps.match.params.noteId)}
            />
            }
          />
            
          <Route
            path='/note/:noteId'
            component={Note}
          />
          <Route 
            path='/folders'
            render={(routerProps) =>
            <FolderList
              folder={this.state.folders.find(folder => folder.id === routerProps.match.params.folderId)}
            />
            } 
          />
          <Route
            path='/folder/:folderId'
            component={Folder}
          />
        </main>
      </div>
    )
  }
}
export default App;