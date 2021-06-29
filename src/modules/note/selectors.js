import { path, prop } from '@frankycty/rm-extra'
import { createSelector } from '@reduxjs/toolkit'

const selectCreateNoteStatus = path(['asyncState', 'note/createNote', 'status'])

const selectNoteState = prop('note')

const selectInspectedNote = createSelector(selectNoteState, prop('inspectedNote'))

export { selectCreateNoteStatus, selectInspectedNote }
