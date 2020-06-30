import { combineReducers } from "redux";
import produtosReducer from "./productosReducer";
import alertaReducer from "./alertaReducer";

export default combineReducers({
  productos: produtosReducer,
  alerta: alertaReducer,
});
