import React, { createContext } from 'react';
import { auth } from '../Firebase setup/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
 export const trabelContect = createContext(null)
const Auth = ({children}) => {

     

    // register setup//

      const createAccount  = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
      }
      const createLogin  = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
      }

    const obj = {
        hi: "hlw",
        createAccount,
        createLogin 
    }
    return (
        <div>
            <trabelContect.Provider value={obj}>
                {children}
            </trabelContect.Provider>
        </div>
    );
};

export default Auth;