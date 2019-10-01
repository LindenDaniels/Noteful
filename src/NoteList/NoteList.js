import React from 'react';
import { Link } from 'react-router-dom'
import Note from '../Note/Note';
import DataStore from '../DataStore/DataStore';

export default function NoteList() {
    return (
        <>
        <p>Choose a note from the list below.</p>
        <ul className='NoteList'>
            {DataStore.notes.map(note => 
                <li key={note.id}>
                    <Link to = {`/note/${note.id}`}>
                        {note.name}
                    </Link>
                </li>
                )}
        </ul>
        </>
    )
}
