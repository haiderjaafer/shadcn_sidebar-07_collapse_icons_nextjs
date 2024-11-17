"use client";
import { PropsWithChildren, useContext, useState,createContext } from "react"


type User ={
    name:string;
    email:string;
    password:string;
    company : string;

}

interface UserContextType{
    user:User | undefined ;
    setUser : (user:User  ) => void;
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({children}:PropsWithChildren) => {

const [data , setData] = useState<User | undefined>(undefined);

     console.log("data" + data?.company);

    
  return (
    <UserContext.Provider  value={{user:data , setUser:setData}}>{children}</UserContext.Provider>
  )
};

export const useUser=()=>{                              // custom hook


    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser must be use within a UserContextProvider ");
    }

    return context;

    // updated sunday
}


