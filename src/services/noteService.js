import BaseService from './baseService'
import { isNilOrEmpty } from '@frankycty/rm-extra'

class NoteService extends BaseService {
  createNote(title, body, collectionId) {
    if (isNilOrEmpty(collectionId))
      throw new Error('NoteService:CreateNote:Invalid collectionId')

    return this.protectedHttpClient.post('/notes', {
      title,
      body,
      collectionId,
    })
  }
}

export default NoteService
