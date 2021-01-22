import { call } from 'redux-saga/effects'
import { httpService } from '~/services/http.service'

export function* publicRequest({
  req,
  url,
  params,
  data,
  headers = {},
  onSuccess,
  onError,
}) {
  headers.Authorization = null

  try {
    const response = yield call(req, url, params || data, headers)
    yield onSuccess(response)
  } catch (error) {
    // const apiResponse = error.response
    // const status = apiResponse ? apiResponse.status : 0
    /** O códigos de erro podem ser validados aqui  */
    yield onError(error)
  }
}

export function* authenticatedRequest({
  req,
  url,
  params,
  data,
  headers = {},
  onSuccess,
  onError,
}) {

  // Validação de token
  // yield httpService.interceptors.request.use(async config => {
  //   const token = await getToken()

  //   if (validToken(token)) {
  //     config.headers.Authorization = token
  //   }
  //   return config
  // })

  try {
    const response = yield call(req, url, params || data, headers)
    yield onSuccess(response)
  } catch (error) {
    const status = error?.response?.status
    /** O códigos de erro podem ser validados aqui  */

    yield onError(error)
  }
}
