/* eslint-disable react/prop-types */
import React from 'react'

import Note from './Note'

const NoteLists = ({ notes, buttonFunc, title, empty, archived }) => {
  const filteredNotes = notes.filter((note) => note.archived === archived)

  return (
    <>
      <h3 className="text-center text-xl font-semibold my-5 duration dark:text-white">
        {title}
      </h3>
      {filteredNotes.length === 0
        ? (
        <p className="text-center text-xl my-5 duration dark:text-white">
          {empty}
        </p>
          )
        : null}

        {filteredNotes.map((note) => (
          <Note key={note.id} buttonFunc={buttonFunc} {...note} />
        ))}

    </>
  )
}

export default NoteLists
