import { createStore, applyMiddleware } from "redux";
import reduceReducers from "reduce-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import initState from "./initState";
import user from "./reducers/user";

const persistConfig = {
  key: "root",
  storage,
};

// persist 미적용

const reducer = reduceReducers(initState, user);

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  const persistor = persistStore(store);
  return { store };
}

// const rootReducer = reduceReducers(initState, user);
// const reducer = persistReducer(persistConfig, rootReducer);

// export default function configureStore() {
//   const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(ReduxThunk))
//   );
//   const persistor = persistStore(store);
//   return { store, persistor };
// }
