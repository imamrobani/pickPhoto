import { combineReducers } from 'redux'
import { listPhotoReducer } from './listPhoto'
import { globalReducer } from './global'

const reducer = combineReducers({
  listPhotoReducer,
  globalReducer
})

export default reducer