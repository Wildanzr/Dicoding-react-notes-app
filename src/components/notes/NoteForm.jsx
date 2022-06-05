/* eslint-disable react/prop-types */
import React from 'react'

const NoteForm = ({ title, notes, titleHandler, notesHandler, submitHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-6/12 my-5 flex-col">
        <h2 className="text-xl text-center duration-300 dark:text-white">
          Create Note
        </h2>
        <p className="text-sm text-right duration-300 dark:text-white">
          Characters available: 50
        </p>
      </div>

      <form
        className="flex flex-col w-6/12"
        onSubmit={submitHandler}
        >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleHandler}
          className="input input-info my-2 w-full duration-300 dark:bg-slate-600 dark:text-white dark:input-accent"
          required
        />

        <textarea
          placeholder="Write notes here..."
          rows={5}
          value={notes}
          onChange={notesHandler}
          className="textarea textarea-info my-2 w-full duration-300 dark:bg-slate-600 dark:text-white dark:textarea-accent"
          required
        />

        <button type='submit' className='btn btn-info btn-outline btn-sm text-lg uppercase mb-2 duration-300 dark:text-white'>Create</button>
      </form>
    </div>
  )
}

export default NoteForm
