import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom'
import './Note.css'
import NotesContext from '../contexts/NotesContext';
import config from '../config'
import PropTypes from 'prop-types';


class Note extends Component {
  static defaultProps = {
    onDeleteNote: () => {},
  }
  
  static contextType = NotesContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
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
          onClick={this.handleClickDelete}
        >Delete Note</button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className = 'Date'>
            <Moment format='Do MMM YYYY'>
              {modified}
            </Moment>
          </span>
        </div>
      </div>
      </div>
    
  )
}
}

Note.propTypes = {
  onDeleteNote: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  modified: PropTypes.string
}
export default Note;