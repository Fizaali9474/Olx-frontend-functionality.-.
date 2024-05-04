import { combineReducers } from "redux";
// import themeSlice from "./themeSlice";
import cartSlice from "./cartSlice";
// import userSlice from "./userSlice";

const rootReducer = combineReducers({
    // themeReducer: themeSlice.reducer,
    cartReducer: cartSlice.reducer
    // userReducer: userSlice.reducer
})

export default rootReducer
