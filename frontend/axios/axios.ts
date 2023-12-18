import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
  headers: {
    Authorization: process.env.API_AUTH_HEADER,
  },
});
