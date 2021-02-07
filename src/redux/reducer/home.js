const initHome = {
  uploadPhoto: []
}

export const uploadPhotoReducer = (state = initHome, action) => {
  if (action.state === 'SET_UPLOAD') {
    return {
      ...state,
      uploadPhoto: action.value
    }
  }
  return state
}