import { createStore, applyMiddleware } from "redux";
import reduceReducers from "reduce-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import initState from "./initState";
import register from "./reducers/register";
import login from "./reducers/login";
import map from "./reducers/map";
import search from "./reducers/search";

// persist 미적용

const reducer = reduceReducers(initState, register, login, map, search);

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return { store };
}

// ----------------------------------------------------------

// persist 적용

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = reduceReducers(initState, register, login);
// const reducer = persistReducer(persistConfig, rootReducer);

// export default function configureStore() {
//   const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(ReduxThunk))
//   );
//   const persistor = persistStore(store);
//   return { store, persistor };
// }
