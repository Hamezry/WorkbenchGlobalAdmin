import { Route, Routes } from 'react-router-dom'
import Landingpage from '../components/Landingpage'

const Unauthenticated = () => {
    return (
        <Routes>
            <Route path='/' element={<Landingpage />} />
        </Routes>
    )
}

export default Unauthenticated
