import React from 'react';
import PropTypes from 'prop-types';

import './NotePageNav.css';

import { findNote, findFolder } from '../NotesHelpers';
import CircleButton from '../CircleButton/CircleButton';
import NotefulContext from '../contexts/NotefulContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faChevronLeft);



export default class NotePageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  }

  static contextType = NotefulContext;

  render () {
    const { notes, folders } = this.context
    const { noteId } = this.props.match.params
    const note = findNote( notes, noteId ) || {}
    const folder = findFolder( folders, note.folderId)
    
    return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {folder && (
          <h3 className='NotePageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
    )
  }

}

NotePageNav.propType = {
  push: PropTypes.func.isRequired
};