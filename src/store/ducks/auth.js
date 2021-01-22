// Action Types
const Types = {
  LOGIN: 'auth/LOGIN',
  SUCCESS: 'auth/SUCCESS',
  ERROR: 'auth/ERROR',
  LOGOUT: 'auth/LOGOUT',
}


// Reducer
const initialState = {
  isLogged: false,
  token: null,
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...initialState,
        loading: true,
      }
    case Types.SUCCESS:
      return {
        ...initialState,
        isLogged: true,
        token: action.data.token,
      }
    case Types.ERROR:
      return {
        ...initialState,
        error: action.error
      }
    case Types.LOGOUT:
      return { ...initialState }
    default:
      return state;
  }
}


// Action Creators
const login = ({ email, password }) => {
  return {
    type: Types.LOGIN,
    payload: {
      email,
      password
    },
  }
}

const logout = () => {
  return {
    type: Types.LOGOUT,
  }
}

const onError = (error) => {
  return {
    type: Types.ERROR,
    error
  }
}

const onSuccess = (data) => {
  return {
    type: Types.SUCCESS,
    data
  }
}

// Export
export const Auth = {
  types: Types,
  actions: {
    login,
    logout,
    onSuccess,
    onError,
  },
  reducer,
}