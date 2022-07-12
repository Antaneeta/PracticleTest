const initialState = {
  user: null,
};

export const authActionTypes = {
  SET_USER: 'SET_USER',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
