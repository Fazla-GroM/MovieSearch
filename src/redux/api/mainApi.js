import axios from "axios"
const baseURL = process.env.MAIN_API

export default axios.create({
  baseURL,
})
