import { createContext , useState , useEffect, useReducer} from "react";
import { onAuthStateChangedListener ,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import createAction from "../utils/reducer/reducer.utils";


//actual or the default value     --useContext
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});


//default value -- useReducer
export const INITIAL_STATE = {
    currentUser : null,
}

export const USER_ACTION_TYPE ={
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer = ( state,action) => {
    const { type ,payload} = action;
    
    console.log("dispatch");
    console.log(action);
    
    
    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,                        // spread the rest values except 
                currentUser: payload,               //value to be overwritten
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}



export const UserProvider = ({children}) =>{
//     const [currentUser,setCurrentUser] = useState(null);     // --for useState
//     const value = {currentUser , setCurrentUser};
//  //signOutUser();

    const [state,dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;
    console.log(currentUser);

    const setCurrentUser = (user) =>{
        dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user))
        // ({ type: USER_ACTION_TYPE.SET_CURRENT_USER , payload: user })
    }

    const value = {currentUser , setCurrentUser};




    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChangedListener((user)=>{ 
    //         if(user){
    //                 createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);
    //         console.log(user);
    //     });

    //     return unsubscribe;
    // },[]);
    return <UserContext.Provider value = {value} > {children} </UserContext.Provider>
}




//-----------------------------  User Reducer ------------------------------
/*
    const userReducer = (state,action) => {
        return{
            curentUser:null
        };

    }



*/