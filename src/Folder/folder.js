import React from 'react';
import datastore from '../datastore/datastore';

export default function Folder(props) {
    const folder = datastore.find(f =>
        f.id === props.match.params.folderId)
        return (
            <div className='folder'>
                <h2>{folder.name}</h2>
            </div>
        )
}

