import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Messaging from "./components/Messaging"
import Commands from "./components/Commands"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import PermanantComponents from "./components/PermanantComponents"

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PermanantComponents/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/messages' element={<Messaging/>} />
                    <Route path='/commands' element={<Commands/>} />
                </Route>
                <Route path='/' element={<Sidebar/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes