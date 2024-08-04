import axios from "axios";
/* importar desde .env y almacenar en constante */
const URL = import.meta.env.VITE_BACKEND_URL;

const baseAdmin = axios.create({
  baseURL: `${URL}/administrador`,
  // withCredentials: true,
});
const baseGuardias = axios.create({
  baseURL: `${URL}/guardias`,
  // withCredentials: true,
});
const baseParqueaderos = axios.create({
  baseURL: `${URL}/parqueaderos`,
  // withCredentials: true,
});
const baseUsuarios = axios.create({
  baseURL: `${URL}/usuarios`,
  // withCredentials: true,
});

export { baseAdmin, baseGuardias, baseParqueaderos, baseUsuarios };
