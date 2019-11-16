import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from './NotePageNav/NotePageNav';
import NoteList from './NoteList/NoteList';
import NotePageMain from './NotePageMain/NotePageMain';
import NotesContext from './contexts/NotesContext';
import FolderListContext from './contexts/FolderListContext';
import NoteListContext from './contexts/NoteListContext';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote'
import './App.css';

class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    renderNavRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav}
                    />
                ))}
                <Route path="/note/:noteId" component={NotePageNav} />
                <Route path="/add-folder" component={AddFolder} />
                <Route path="/add-note" component={AddNote} />
              </>  
        );
    }


    renderMainRoutes() {
        
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    
                    <Route
                        exact
                        key={path}
                        path={path}
                        component = {NoteList}
                     />
                ))}
                <Route
                    path="/note/:noteId"
                    component={NotePageMain}
                />
            </>  
        );
    }
    

    render() {
        ;
        
        return (
            <FolderListContext.Provider>
            <NotesContext.Provider>
            <NoteListContext.Provider>
            <div className="App">
                <header className="App__header">
                    <h1>
                        <Link to="/">Noteful</Link>{' '}
                        
                    </h1>
                </header>
               
               
                <nav className="App__nav">{this.renderNavRoutes()}</nav>
                <main className="App__main">{this.renderMainRoutes()}</main>
                
                
            </div>
            </NoteListContext.Provider>
            </NotesContext.Provider>
            </FolderListContext.Provider>
            
        );
    }
}

export default App;