import { combineReducers } from 'redux'
import { globalReducer } from './global'
import { uploadPhotoReducer } from './home'
import { listPhotoReducer } from './listPhoto'

const reducer = combineReducers({
  listPhotoReducer,
  globalReducer,
  uploadPhotoReducer
})

export default reducer