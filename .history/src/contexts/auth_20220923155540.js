import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    function signin(data) {
        localStorage.setItem('workbench-app-token', data.token)
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