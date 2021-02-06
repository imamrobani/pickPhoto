const initListPhoto = {
  photos: []
}

export const listPhotoReducer = (state = initListPhoto, action) => {
  if (action.type === 'SET_LIST_PHOTO') {
    return {
      ...state,
      photos: action.value
    }
  }
  return state
}