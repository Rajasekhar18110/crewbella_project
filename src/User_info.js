import React, { Component } from "react"
import { Card } from "react-bootstrap"
import ReactDOM from "react-dom"
import "./User.css"
class User_info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://py.crewbella.com/user/api/profile/chiragbalani")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    details: json,
                })
            })
    }

    render() {
        var { isLoaded, details } = this.state

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="user">
                    <div id="userimg">
                        <Card>
                            <Card.Img src={details.basic.image_hd} />
                        </Card>
                    </div>
                    <p>username: {details.basic.username}</p>
                    <p>Date of birth: {details.basic.dob}</p>
                </div>
            )
        }
    }
}

export default User_info
