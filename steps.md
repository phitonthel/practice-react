# init
npx create-react-app my-app
npm install react-router-dom // https://reactrouter.com/web/guides/quick-start
npm install redux // https://redux.js.org/introduction/getting-started
npm install react-redux // https://react-redux.js.org/
npm install redux-thunk // https://github.com/reduxjs/redux-thunk
npm install axios

db-json // https://github.com/typicode/json-server

# router
https://reactrouter.com/web/guides/quick-start

# initialize store index
https://redux.js.org/api/createstore
-> store: merupakan sekumpulan reducers. Untuk menggabungkan beberapa reducers, dapat digunakan `combineReducers` yang merupakan fungsi yang menerima parameters object berupa reducers
-> useSelector = untuk mengambil data dari store (react-redux)
-> useDispatch = untuk menjalankan action ke store (react-redux)

# initialize reducer
https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

# json-server
json-server --watch db.json

# notes
-> useState: digunakan untuk variable dalam pages/component
-> useSelector: digunakan untuk variable dalam stores