import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import adminReducer from "./admin/reducer";
import userReducer from "./user/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    admin: adminReducer, user: userReducer
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
