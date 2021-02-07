const initListPhoto = {
  photos: [],
  lastImage: {}
}

export const listPhotoReducer = (state = initListPhoto, action) => {
  if (action.type === 'SET_LIST_PHOTO') {
    return {
      ...state,
      photos: action.value
    }
  }
  if (action.type === 'SET_LAST_IMAGE') {
    return {
      ...state,
      lastImage: action.value
    }
  }
  return state
}