import react, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"
import User_info from "./User_info"
import { Button, Form, FormGroup } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"

function Home() {
    return (
        <div className="Home">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Input Box</Form.Label>
                    <Form.Control type="text" placeholder="Input Box" />
                </Form.Group>

                <Link to="./User_info">
                    <Button type="button">Click Me!</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Home
