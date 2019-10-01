import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note';
import DataStore from '../DataStore/DataStore';

export default function NoteList() {
    return (
        <>
        <p>Choose a note from the list below.</p>
        <ul className='NoteList'>
            {DataStore.notes.map(note => 
                <li key={DataStore.notes.id}>
                    <Link to = {`/note/${DataStore.notes.id}`}>
                        {note.name}
                    </Link>
                </li>
                )}
        </ul>
        </>
    )
}
