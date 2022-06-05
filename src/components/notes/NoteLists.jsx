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

      <div className="grid grid-cols-3 grid-flow-row gap-1 items-center">
        {filteredNotes.map((note, idx) => (
          <div className="flex" key={note.id}>
            <Note key={note.id} buttonFunc={buttonFunc} {...note} />

            {/* Break if idx % 3 */}
            {idx % 3 === 0 ? <br /> : null}
          </div>
        ))}
      </div>
    </>
  )
}

export default NoteLists
