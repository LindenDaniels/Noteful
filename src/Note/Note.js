import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import PropTypes from 'prop-types';
import './Note.css'

import NotefulContext from '../contexts/NotefulContext'
import config from '../config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTrashAlt);




export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => {},
  }

  static contextType = NotefulContext;

  handleClickDelete = () => {
    const noteId = this.props.id


    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
    })
    .then(() => {
      this.context.deleteNote(noteId)
      this.props.onDeleteNote(noteId)
    })
    .catch(err => {
      console.log({ err })
    })
  }

  render() {
    const { name, id, modified } = this.props
    

    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button 
          className='Note__delete' 
          type='button'
          onClick={ this.handleClickDelete }>
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>        
    )
  }
}

Note.propType = {
  onDeleteNote: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  modified: PropTypes.string
};