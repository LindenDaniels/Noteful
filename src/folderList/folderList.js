import React from 'react'
import { NavLink } from 'react-router-dom'
import datastore from './datastore/datastore'

export default function folderList() {
    return (
        <>
        <ul className="FolderList">
            {datastore.map(folder => 
                <li key={folder.id}>
                    <NavLink to ={`/folder/${folder.id}`}>
                        {folder.title}
                    </NavLink>
                </li>
            )}
        </ul>
        </>

    )
}