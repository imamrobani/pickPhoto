import axios from 'axios'
import { Networks } from '../../const'
import { setLoading } from './global'

export const getListPhotos = () => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(`${Networks.BASE_URL}/list_image`)
    .then(res => {
      console.log('getListPhotos: ', res.data)
      dispatch(setLoading(false))
      dispatch({ type: 'SET_LIST_PHOTO', value: res.data.data })
      dispatch({ type: 'SET_LAST_IMAGE', value: res.data.meta.last_image })
    })
    .catch(err => {
      dispatch(setLoading(false))
      console.log('err getList: ', err)
    })
}