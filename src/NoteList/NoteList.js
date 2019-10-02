import React from 'react';
import Note from '../Note/Note';
export default function NoteList(props) {
    return (
        <section className="Notelist">
        <ul>
       {props.notes.map(note => 
                <li key={note.id}>
                    <Note
                    name={note.name}
                    modified={note.modified}
                    />
                </li>     
       )}
        </ul> 
        </section>
    )
}

NoteList.defaultProps = {
    notes: [],
}
