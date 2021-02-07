import axios from 'axios'
import fetchTasks from './taskActionFetch'

export default function deleteTask (id, url) {
  return (dispatch => {
    axios({
      method: 'DELETE',
      url: url,
    })
      .then((response) => {
        console.log('>>> deleteTask ID=', id, 'SUCCESS');
        dispatch(fetchTasks('http://localhost:3000/tasks'))
      })
      .catch((err) => {
        console.log(err);
      })
  })
}