const { put, takeLatest } = require("redux-saga/effects")
const { api } = require("~/services")
const { Auth } = require("../ducks")
const { publicRequest } = require("./http")

function* login({ payload }) {

  const { onError, onSuccess } = Auth.actions

  console.tron.log(`Payload: ${JSON.stringify(payload)}`)

  yield publicRequest({
    req: api.post,
    url: '/api/login',
    data: payload,
    onError: apiResponse => {
      return put(onError(apiResponse))
    },
    onSuccess: response => {
      return put(onSuccess(response.data))
    }
  })

}

export const AuthSagas = {
  login,
}

export function* LoginSaga() {
  yield takeLatest(Auth.types.LOGIN, login)
}
