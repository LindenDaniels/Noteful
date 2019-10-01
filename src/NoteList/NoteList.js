import React from 'react';
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import datastore from '../DataStore/DataStore';

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
