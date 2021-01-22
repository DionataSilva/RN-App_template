import { Auth } from "~/store/ducks"
const { login } = Auth.actions

const mapStateToProps = ({ authReducer }) => {
  const {
    isLogged,
    token,
    loading,
    error
  } = authReducer

  return {
    isLogged,
    token,
    loading,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  }
}

export default {
  mapStateToProps,
  mapDispatchToProps,
}