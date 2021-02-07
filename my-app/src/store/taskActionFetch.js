import axios from 'axios'

// const fetchTasks =  (url) => {
//   console.log('>>> fetchTasks RUNNING');
//   return (dispatch) => {
//     axios({
//       method: 'GET',
//       url: url,
//     })
//       .then((response) => {
//         console.log('>>> fetchTasks DATA=', response.data);
//         dispatch({
//           type: 'FETCH_TASKS',
//           payload: response.data
//         })
//       })
//       .catch((err) => {
//         console.log('>>> fetchTasks ERR=', err);
//         console.log(err);
//       })
//   }
// }

// export default fetchTasks

export default function fetchTasks (url) {
  console.log('>>> fetchTasks RUNNING');
  return (dispatch) => {
    axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        console.log('>>> fetchTasks DATA=', response.data);
        dispatch({
          type: 'FETCH_TASKS',
          payload: response.data
        })
      })
      .catch((err) => {
        console.log('>>> fetchTasks ERR=', err);
        console.log(err);
      })
  }
}