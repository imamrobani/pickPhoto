import axios from 'axios'
import { Networks } from '../../const'

export const getListPhotos = () => (dispatch) => {
  axios.get(`${Networks.BASE_URL}/list_image`)
    .then(res => {
      console.log('getListPhotos: ', res.data)
      dispatch({ type: 'SET_LIST_PHOTO', value: res.data.data })
    })
    .catch(err => {
      console.log('err getList: ', err)
    })
}