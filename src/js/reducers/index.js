import { combineReducers } from "redux";

import postReducer from "./postReducer";
import rootReducer from "./rootReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  postReducer,
  rootReducer,
  form: formReducer
});
