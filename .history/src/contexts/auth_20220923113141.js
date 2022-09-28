import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setAuthenticated] = useState(true)

    function signin() {
        setAuthenticated(true)
    }

    function signout() {
        setAuthenticated(false)
    }

    return (
        <authContext.Provider value={{ isAuthenticated, signin, signout }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider

export function useAuth() {
    return useContext(authContext)
}