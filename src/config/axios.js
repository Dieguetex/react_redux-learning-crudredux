import Axios from "axios";

const clienteAxios = Axios.create({
  baseURL: "http://localhost:4000",
});

export default clienteAxios;
