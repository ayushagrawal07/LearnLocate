import { createContext,useContext } from "react";
import reducer from "./reducer";
import { useReducer } from "react";

const initialState = {
    currentUser :null,
    openLogin: false,
    loading: false,
    alert: { open: false, severity: 'info', message: '' },
    profile:{open:false , file:null,photoURL:''},
    images:[],
    details:{title:'',desription:'',price:0},
    location:{lng:0 , lat:0}
};

const Context=createContext(initialState);
export const useValue = ()=>{
    return useContext(Context)
}

const ContextProvider = ({children}) => {
  const[state,dispatch]=useReducer(reducer,initialState);
    return (
   <Context.Provider value ={{state,dispatch}}>
   {children}

   </Context.Provider>
  );
};

export default ContextProvider