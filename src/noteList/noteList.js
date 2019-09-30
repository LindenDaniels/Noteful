import React from 'react';
import { Link } from 'react-router-dom'
import Note from '../note/note'
import datastore from '../datastore/datastore';

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