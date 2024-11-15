"use client";

import { useUser } from "@/context/UserContext";
import {  useState } from "react"

export const FormUser = () => {

    const {setUser} = useUser();

    const [name , setName] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [password , setPassword] = useState<string>("");

    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        setUser({name,email,password});

    }



  return (
    <div className="bg-gray-200 p-2 rounded">
        <form onSubmit={onSubmit}>
<div className="flex flex-col space-y-2">

    <input
    className="p-2 border rounded"
    type="text"
    placeholder="Name"
    onChange={(e)=>setName(e.target.value)}
    
    />

<input
    className="p-2 border rounded"
    type="text"
    placeholder="Email"
    onChange={(e)=>setEmail(e.target.value)}
    
    />

<input
    className="p-2 border rounded"
    type="text"
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
    
    />

    <button className="bg-blue-400 p-2 border rounded" type="submit">Submit</button>


</div>

        </form>
    </div>
  )
}
