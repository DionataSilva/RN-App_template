import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://reqres.in',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
