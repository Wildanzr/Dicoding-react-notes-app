/* eslint-disable react/prop-types */
import React from 'react'

import DarkSwitcher from './DarkSwitcher'

const Header = ({ theme, onDarkSwitcherClick, query, onQueryChangeEventHandler }) => {
  return (
    <div className="navbar navbar-center bg-base-100 duration-300 dark:bg-slate-800">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl duration-300 dark:text-white">
          Notes App
        </a>
      </div>

      <div className="flex-none mx-5">
        <DarkSwitcher theme={theme} onDarkSwitcherClick={onDarkSwitcherClick}/>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control ">
          <input
            type="text"
            placeholder="Search Notes"
            value={query}
            onChange={onQueryChangeEventHandler}
            className="input input-info duration-300 dark:bg-slate-600 dark:text-white dark:input-accent"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
