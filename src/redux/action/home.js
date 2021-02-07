import axios from "axios"
import { Networks } from "../../const"
import { showMessage } from "../../utils"
import { setLoading } from "./global"

export const uploadPhoto = (dataForm) => (dispatch) => {
  dispatch(setLoading(true))
  axios.post(`${Networks.BASE_URL}/upload_image`, dataForm, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    console.log('res', res.data)
    const isStatus = res.data.status
    dispatch(setLoading(false))
    showMessage(res.data.message, isStatus && 'success')
    dispatch({ type: 'SET_UPLOAD', value: res.data.data })
  }).catch(err => {
    console.log('err: ', err.response)
    dispatch(setLoading(false))
    showMessage(err.response.message)
  })
}