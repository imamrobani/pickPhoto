import axios from "axios"
import { Networks } from "../../const"
import { showMessage } from "../../utils"
import { setLoading } from "./global"
import { getListPhotos } from "./listPhoto"

export const uploadPhoto = (dataForm) => (dispatch) => {
  dispatch(setLoading(true))
  axios.post(`${Networks.BASE_URL}/upload_image`, dataForm, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    const isStatus = res.data.status
    dispatch(setLoading(false))
    showMessage(res.data.message, isStatus && 'success')
    dispatch({ type: 'SET_UPLOAD', value: res.data.data })
    dispatch(getListPhotos())
  }).catch(err => {
    dispatch(setLoading(false))
    showMessage(err.response.message)
  })
}