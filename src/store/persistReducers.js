import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "mani",
      storage,
      whitelist: ["songs"],
    },
    reducers
  );

  return persistedReducer;
};
