import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as ShoesReducer} from "./ShoesReducer/reducer"
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";
import {reducer as AdminReducer} from  "./AdminAuthReducer/reducer"
import { reducer as MenShirtReducer } from "./MenShirtReducer/reducer";
import { reducer as WomenShoesReducer } from "./WomenShoesReducer/reducer";
import { reducer as SearchReducer } from "./SearchReducer/reducer";

const rootReducer = combineReducers({
    ShoesReducer,
    AuthReducer,
    cartReducer,
    AdminReducer,
    MenShirtReducer,
    WomenShoesReducer,
    SearchReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));