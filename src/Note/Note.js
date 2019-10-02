import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
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
          {' '}
          <span className = 'Date'>
            <Moment format='Do MMM YYYY'>
              {props.modified}
            </Moment>
            
          </span>
        </div>
      </div>
    </div>
  )
}