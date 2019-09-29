import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import FolderList from './folderList/folderList';


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
            component={FolderSideBar}
          />
        </Sidebar>
        <main>
          <Route 
            exact path='/'
            component={NoteList}
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