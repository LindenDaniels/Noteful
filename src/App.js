import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import DataStore from './DataStore/DataStore';


class App extends Component {
    state = {  
      notes: [],
      folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(DataStore), 600);
  }

  renderNavRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
      {['/', '/folder/:folderId'].map(path => (
        <Route
          exact
          key={path}
          path={path}
          render={routeProps => (
            <NoteListNav
                folders={folders}
                notes={notes}
                {...routeProps}
              />
              
          )} 
          />
      ))}
      <Route
         path="/note/:noteId"
         render={routeProps => { 
           const{noteId} = routeProps.match.params;
           const note = findNote(notes, noteId) || {};
           const folder = findFolder(folder, note.folderId);
           return <NotePageNav {...routeProps} folder={folder}
           />;

         }}
         />
         </>
    );
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
      {['/', '/folder/:folderId'].map(path => (
        <Route
          exact
          key={path}
          path={path}
          render={routeProps => {
            const {folderId} = routeProps.match.params;
            const notesForFolder = getNotesForFolder(
              notes,
              folderId
            );
            return (
              <NoteList
                {...routeProps}
                notes={notesForFolder}
                />
            );
          }}
          />
      ))}
      <Route 
         path="/note/noteId"
         render={routeProps => {
           const {noteId} = routeProps.match.params;
           const note = findNote(notes, noteId);
           return <NotePageMain {...routeProps} note={note}
      />

         }}
         />
         </>
    );

  }
  
    render() {
      
    return (
      <div className='App'>
        
          <Nav className='App__nav'>
            {this.renderNavRoutes()}
          </Nav>
        
        <header className='App__header'>
          <h1>
            <Link to="/">Noteful</Link>{' '}
          </h1>
        </header>
        
        <main className="App__main">{this.renderMainRoutes()}</main>
          
      </div>
    )
  }
}
export default App;