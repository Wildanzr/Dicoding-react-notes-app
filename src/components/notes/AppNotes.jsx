import React from 'react'

import Header from '../base/Header'

class AppNotes extends React.Component {
  constructor (props) {
    super(props)

    // Global state
    this.state = {
      notes: [],
      theme: 'light',
      query: ''
    }

    // Bind methods
    this.onDarkSwitcherClick = this.onDarkSwitcherClick.bind(this)
  }

  onDarkSwitcherClick = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  render () {
    if (this.state.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    return (
      <div className="flex container bg-slate-800 mx-auto flex-col">
        <Header
          theme={this.state.theme}
          onDarkSwitcherClick={this.onDarkSwitcherClick}
        />
      </div>
    )
  }
}

export default AppNotes
