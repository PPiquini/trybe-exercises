const INITIAL_STATE = {
  clients: [],
};

function clientSignUp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      return state;
    default:
      return state;
  }
}

export default clientSignUp;