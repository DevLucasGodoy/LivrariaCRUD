import axios from 'axios'

const api = axios.create({
  baseURL:'https://TrabalhoFinalPTAS.lauanexx.repl.co'
})

export default api;