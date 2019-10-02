import React from 'react';
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import './Note.css'

export default function Note(props) {
  return (
    <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          modified
          {''}
          <span className = 'Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}