import React, {ClassicComponent} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom'
import './Note.css'


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
      if(!res.ok)
         return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(() => {
      this.context.deleteNote(noteId)
      this.props.onDeleteNote(noteId)
    })
    .catch(error => {
      console.log({error})
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

export default Note;