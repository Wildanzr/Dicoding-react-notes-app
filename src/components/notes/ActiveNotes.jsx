/* eslint-disable react/prop-types */
import React from 'react'

import Note from './Note'

const ActiveNotes = ({ notes }) => {
  const unArchivedNotes = notes.filter(note => !note.archived)
  return (
    <>
      <h3 className='text-center text-xl font-semibold my-5 duration dark:text-white'>Active Notes</h3>
      {unArchivedNotes.length === 0 ? <p className='text-center text-xl my-5 duration dark:text-white'>No Active Notes :(</p> : null}
      <div className="carousel rounded-box mb-5 mx-5">
        <div className="carousel-item mx-3 my-3">
          {unArchivedNotes.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ActiveNotes
