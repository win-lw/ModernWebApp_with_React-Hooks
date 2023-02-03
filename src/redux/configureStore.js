import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//integrate redux thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
