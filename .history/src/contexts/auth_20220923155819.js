import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const token = localStorage.getItem('workbench-app-token')

    const [isAuthenticated, setAuthenticated] = useState(token)

    function signin(data) {
        localStorage.setItem('workbench-app-token', data.token)
        setAuthenticated(true)
    }

    function signout() {
        localStorage.removeItem('workbench-app-token')
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