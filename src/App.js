import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from './NotePageNav/NotePageNav';
import NoteList from './NoteList/NoteList';
import NotePageMain from './NotePageMain/NotePageMain';
import DataStore from './DataStore';
import NotesContext from './NotesContext';
import './App.css';

class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    componentDidMount() {
        // fake date loading from API call
        this.setState(DataStore);
    }

    renderNavRoutes() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders
        }
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <NotesContext.Provider value={contextValue}>
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav}
                    />
                
                <Route
                    path="/note/:noteId"
                    component={NotePageNav}
                 />
                <Route path="/add-folder" component={NotePageNav} />
                <Route path="/add-note" component={NotePageNav} />
                </NotesContext.Provider>
                )  
            
        )};
        </>
        )}
        

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
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.handleDeleteNote,
        };
        
        return (
            <NotesContext.Provider value={contextValue}>
            <div className="App">
                <header className="App__header">
                    <h1>
                        <Link to="/">Noteful</Link>{' '}
                        
                    </h1>
                </header>
               
                <div className = "flex">
                <nav className="App__nav">{this.renderNavRoutes()}</nav>
                <main className="App__main">{this.renderMainRoutes()}</main>
                </div>
                
            </div>
            </NotesContext.Provider>
        );
    }
}

export default App;