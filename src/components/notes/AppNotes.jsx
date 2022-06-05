import React from 'react'

import { getInitialData, addNote } from '../../utils'

import Header from '../base/Header'
import Footer from '../base/Footer'
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
    this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this)
    this.onFormSubmitEventHandler = this.onFormSubmitEventHandler.bind(this)
    this.moveNote = this.moveNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)

    // Wrap button functions
    this.buttonFunc = {
      moveNote: this.moveNote,
      deleteNote: this.deleteNote
    }
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

  onQueryChangeEventHandler = (e) => {
    this.setState({ query: e.target.value })

    if (e.target.value !== '') {
      this.setState({
        tempNotes: this.state.notes.filter((note) => {
          return note.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        })
      })
    } else {
      this.setState({ tempNotes: [] })
    }
  }

  onFormSubmitEventHandler = (e) => {
    e.preventDefault()

    this.setState({
      notes: [...addNote(this.state.notes, this.state.noteForm)],
      noteForm: {
        title: '',
        notes: ''
      }
    })
  }

  moveNote = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived
      }

      return note
    })

    this.setState({ notes })
  }

  deleteNote = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id)

    this.setState({ notes })
  }

  render () {
    if (this.state.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    return (
      <div className="flex container h-screen mx-auto my-auto flex-col duration-300 dark:bg-slate-800">
        <Header
          theme={this.state.theme}
          onDarkSwitcherClick={this.onDarkSwitcherClick}
          query={this.state.query}
          onQueryChangeEventHandler={this.onQueryChangeEventHandler}
        />

        <NoteForm
          title={this.state.noteForm.title}
          titleHandler={this.onTitleChangeEventHandler}
          notes={this.state.noteForm.notes}
          notesHandler={this.onNoteChangeEventHandler}
          submitHandler={this.onFormSubmitEventHandler}
        />

        <NoteLists
          notes={
            this.state.query === '' ? this.state.notes : this.state.tempNotes
          }
          buttonFunc={this.buttonFunc}
          title={'Active Notes'}
          empty={'No Active Notes :('}
          archived={false}
        />
        <NoteLists
          notes={
            this.state.query === '' ? this.state.notes : this.state.tempNotes
          }
          buttonFunc={this.buttonFunc}
          title={'Archived Notes'}
          empty={'No Archived Notes :('}
          archived={true}
        />

        <Footer />
      </div>
    )
  }
}

export default AppNotes
