import React from './node_modules/react'
import { NavLink } from './node_modules/react-router-dom'
import datastore from '../DataStore/datastore'

export default function FolderList() {
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