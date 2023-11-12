import { createContext, useContext, useState } from "react";


//create context
export const AuthContext = createContext()


export const useAuth = () => useContext (AuthContext)


//share the created context with other component

export default function Authprovider({ children })
{
///put some state in the context
    const [number , setNumber] = useState (10)

    setInterval(() => setNumber(number+1), 10000)

    return (
        <AuthContext.Provider value = { {number} }>
            {children}
        </AuthContext.Provider>
    )
}