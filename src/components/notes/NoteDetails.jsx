/* eslint-disable react/prop-types */
import React from 'react'

const NoteDetails = ({ title, body }) => {
  return (
    <div className="flex">
      <label htmlFor="note-details" className="btn btn-info btn-xs modal-button">
        Details
      </label>

      <input type="checkbox" id="note-details" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box duration-300 dark:bg-slate-600 dark:text-white">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {body}
          </p>
          <div className="modal-action">
            <label htmlFor="note-details" className="btn btn-ghost">
              See!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetails
