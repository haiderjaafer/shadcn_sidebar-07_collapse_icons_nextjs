"use client";
import {useUser} from "@/context/UserContext";

const UserCheck = () => {

    const   {user}= useUser();
  return (
    <div className="bg-gray-100 p-2 rounded shadow ">

<h1>welcome Data user</h1>

{
    !user ?(
        <p>not data user</p>
    ) : (

        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )


}



    </div>
  )
}
export default UserCheck