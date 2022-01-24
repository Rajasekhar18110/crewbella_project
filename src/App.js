import react, { Component } from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useHistory,
} from "react-router-dom"
import User_info from "./User_info"
import Home from "./Home"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/User_info" element={<User_info />} />
            </Routes>
        </Router>
    )
}

export default App
