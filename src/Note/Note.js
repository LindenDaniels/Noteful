import React from 'react';
import DataStore from '../DataStore/DataStore';

export default function Note(props) {
    const note = DataStore.notes.find(n =>
        n.id === props.match.params.noteId)
        console.log(DataStore.notes.content);
        return (
            <div className='Note'>
                <h2>{note.name}</h2>
            
            {DataStore.note.content.map((n, i) =>
                (n === '')
                ? <br key = {i} />
                : <p key = {i}>{n}</p> 
                )}
            </div>
        )
}
