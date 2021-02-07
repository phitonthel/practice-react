import axios from 'axios'

export default function addTask (url, payload) {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: url,
      data: {
        // id: payload.id,
        title: payload.title,
        category: payload.category
      }
    })
      .then((response) => {
        console.log('>>> addTask SUCCESS');
      })
      .catch((err) => {
        console.log(err);
      })
  }
}