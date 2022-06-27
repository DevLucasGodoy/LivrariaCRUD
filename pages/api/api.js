import axios from 'axios'

const api = axios.create({
  baseURL:'https://livrariacrud-api.lucasgodoy04.repl.co'
})

export default api;