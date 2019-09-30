import React from 'react';
import datastore from '../datastore/datastore';

export default function Note(props) {
    const note = datastore.find(n =>
        n.id === props.match.params.noteId)
        return (
            <div className='Note'>
                <h2>{note.name}</h2>
            
            {note.content.map((n, i) =>
                (n === '')
                ? <br key = {i} />
                : <p key = {i}>{n}</p> 
                )}
            </div>
        )
}