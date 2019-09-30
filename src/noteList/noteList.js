import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom'
import Note from '../Note/Note'
import datastore from '../DataStore/datastore';

export default function NoteList() {
    return (
        <>
        <p>Choose a note from the list below.</p>
        <ul className='NoteList'>
            {datastore.map(note => 
                <li key={note.id}>
                    <Link to = {`/note/${note.id}`}>
                        {note.title}
                    </Link>
                </li>
                )}
        </ul>
        </>
    )
}