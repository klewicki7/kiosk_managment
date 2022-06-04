import {applyMiddleware, combineReducers, createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from "redux-persist";
import auth from './redux/reducers/auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authMiddleware from './redux/middlewares/auth';


const appReducer = combineReducers({
    auth,
});

let middleware = [
    thunk,
    authMiddleware,

];

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
}

const appMiddleware = applyMiddleware(...middleware);

const persistConf = {key: 'root', storage: AsyncStorage, blacklist: ['ui']};
const persistedReducer = persistReducer(persistConf, appReducer);

const store = createStore(
    persistedReducer,
    appMiddleware,
);

export const persistor = persistStore(store);

export default store;
