import { createContext, useContext, useState } from "react";


//create context
export const AuthContext = createContext()


export const useAuth = () => useContext (AuthContext)


//share the created context with other component

export default function Authprovider({ children })
{
///put some state in the context
    const [number , setNumber] = useState (10)

    const [username , setUsername] = useState(null)


    function login (username , password)
    {
        if (username === 'in28minutes' && password === 'dummy')
        {
            setUsername(username)
            return(true)
        }
        else
        {
            return(false)
        }
    }


    // setInterval(() => setNumber(number+1), 10000)

    return (
        <AuthContext.Provider value = { {number , login , username} }>
            {children}
        </AuthContext.Provider>
    )
}