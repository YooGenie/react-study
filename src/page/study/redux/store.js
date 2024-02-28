// store.js
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Redux Persist에서 사용할 스토리지 엔진(로컬 스토리지 사용)
import rootReducer from "./reducer";

const persistConfig = {
    key: "root", // 로컬 스토리지에 저장되는 키
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
//persistConfig에 따라 상태를 로컬 스토리지에 저장하고 관리한다.

const store = createStore(persistedReducer); // persistedReducer 이용해서 지속성 유지한다
const persistor = persistStore(store); // 지속성 객체를 만든다.

export { store, persistor };