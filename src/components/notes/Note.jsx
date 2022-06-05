/* eslint-disable react/prop-types */
import React from 'react'

import moment from 'moment'

const Note = ({ id, title, body, createdAt, archived }) => {
  // Minify notes body
  body = body.length > 150 ? body = `${body.substring(0, 125)} ........... ${body.substring(body.length - 20, body.length)}` : body

  return (
    <div
      className="card card-compact w-96 h-52 bg-base-200 mx-3 shadow-xl dark:bg-slate-600 dark:text-white"
      key={id}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xs pb-0 mb-0">
          {moment(createdAt).format('llll')}
        </p>
        <p className="text-sm">{body}</p>
      </div>

      <div className="card-actions my-3 mx-3">
        <div className="flex w-6/12 justify-start">
          <button className="btn btn-error btn-xs mx-1">Delete</button>
          <button className="btn btn-warning btn-xs mx-1">{archived ? 'Unarchive' : 'Archive'}</button>
        </div>
        <div className="flex w-5/12 justify-end">
          <button className="btn btn-info btn-xs">Detail</button>
        </div>
      </div>
    </div>
  )
}

export default Note
