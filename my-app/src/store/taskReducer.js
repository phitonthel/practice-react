const initialState = {
  isLoading: true,
  tasks: []
}

// Use the initialState as a default value
export default function taskReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'FETCH_TASKS':
      return {...state, tasks: action.payload}
    // case 'DELETE_TASKS':
    //   return {...state, tasks: action.payload}
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}