import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { noteService } from 'services'

export const createNote = createAsyncThunk(
  'note/createNote',
  async ({ title, body, collectionId }, { rejectWithValue }) => {
    try {
      const newNote = await noteService.createNote(title, body, collectionId)

      return newNote
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const noteAdapter = createEntityAdapter()

const initialState = noteAdapter.getInitialState({
  entities: {},
  ids: [],
  inspectedNote: undefined,
  total: undefined,
})

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
  extraReducers: {},
})

const { reducer: noteReducer } = noteSlice
export { noteReducer }
