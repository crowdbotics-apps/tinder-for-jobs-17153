import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn248161Reducer from '../features/SignIn248161/redux/reducers'
import SignIn248094Reducer from '../features/SignIn248094/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn248161: SignIn248161Reducer,
SignIn248094: SignIn248094Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});