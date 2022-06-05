import React from 'react'

import { getInitialData, addNote } from '../../utils'

import Header from '../base/Header'
import NoteForm from './NoteForm'
import NoteLists from './NoteLists'

class AppNotes extends React.Component {
  constructor (props) {
    super(props)

    // Global state
    this.state = {
      notes: getInitialData(),
      tempNotes: [],
      noteForm: {
        title: '',
        notes: ''
      },
      theme: 'light',
      query: ''
    }

    // Bind methods
    this.onDarkSwitcherClick = this.onDarkSwitcherClick.bind(this)
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this)
    this.onFormSubmitEventHandler = this.onFormSubmitEventHandler.bind(this)
  }

  onDarkSwitcherClick = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  onTitleChangeEventHandler = (e) => {
    const titleLength = e.target.value.length

    if (titleLength <= 50) {
      this.setState({
        noteForm: {
          ...this.state.noteForm,
          title: e.target.value
        }
      })
    }
  }

  onNoteChangeEventHandler = (e) => {
    this.setState({
      noteForm: {
        ...this.state.noteForm,
        notes: e.target.value
      }
    })
  }

  onFormSubmitEventHandler = (e) => {
    e.preventDefault()

    this.setState({
      notes: [
        ...addNote(this.state.notes, this.state.noteForm)
      ],
      noteForm: {
        title: '',
        notes: ''
      }
    })

    console.log(this.state.notes)
  }

  render () {
    if (this.state.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    return (
      <div className="flex container mx-auto flex-col duration-300 dark:bg-slate-800">
        <Header
          theme={this.state.theme}
          onDarkSwitcherClick={this.onDarkSwitcherClick}
        />

        <NoteForm
          title={this.state.noteForm.title} titleHandler={this.onTitleChangeEventHandler}
          notes={this.state.noteForm.notes} notesHandler={this.onNoteChangeEventHandler}
          submitHandler={this.onFormSubmitEventHandler}
        />

        <NoteLists notes={this.state.notes} title={'Active Notes'} empty={'No Active Notes :('} archived={false}/>
        <NoteLists notes={this.state.notes} title={'Archived Notes'} empty={'No Archived Notes :('} archived={true}/>
      </div>
    )
  }
}

export default AppNotes
