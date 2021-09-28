import { event } from "jquery";
import { Component } from "react";
import axios from 'axios'

class Register extends Component {
    state = {
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendUserdata = (e) => {
        e.preventDefault()
        const data = {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post("http://localhost:90/signup", data)
            .then((response) => {
                console.log(response)
            }
            )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="container m-5">

                <div class="card m-5">
                    <h5 className="card-header">Register</h5>
                    <div className="card-body p-3">
                        <form>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="fname" name="fname"value={this.state.fname} onChange={this.changeHandler} className="form-control" placeholder="Enter First Name" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="lname" name="lname" value={this.state.lname} onChange={this.changeHandler}className="form-control" placeholder="Enter Last Name" />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="username" name="username"value={this.state.username} onChange={this.changeHandler} className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email"value={this.state.email} onChange={this.changeHandler} className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password"value={this.state.password} onChange={this.changeHandler} className="form-control" placeholder="Enter Password" />
                            </div>
                            <br></br>

                            <button type="register"onClick={this.sendUserdata} className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register