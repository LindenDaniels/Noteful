import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './NoteListNav.css'


import NotefulContext from '../contexts/NotefulContext'
import CircleButton from '../CircleButton/CircleButton'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faPlus);


export default class NoteListNav extends Component {
  static contextType = NotefulContext;


  render() {
    const { folders=[] } = this.context

    return (
      <div className='NoteListNav'>
        <ul className='NoteListNav__list'>
          {folders.map(folder =>
            <li key={folder.id}>
              <NavLink
                aria-controls="note__list"
                className='NoteListNav__folder-link'
                to={`/folder/${folder.id}`}
              >
                {folder.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='NoteListNav__button-wrapper'>
          <CircleButton
            
            tag={Link}
            to='/add-folder'
            type='button'
            className='NoteListNav__add-folder-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Folder
          </CircleButton>
        </div>
      </div>
    )
  }
}