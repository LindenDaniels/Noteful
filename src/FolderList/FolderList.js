import React from 'react'
import { NavLink } from 'react-router-dom'
import DataStore from '../DataStore/DataStore'

export default function FolderList() {
    return (
        <>
        <ul className="FolderList">
            {DataStore.folders.map(folder => 
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
