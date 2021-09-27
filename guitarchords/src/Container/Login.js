import { Component, state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        email: "",
        password: "",
        checkLogin: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.email]: e.target.value,
            [e.target.password]: e.target.value,
            [e.target.checkLogin]: e.target.value
        }

        )
    }
    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/login", this.state)
            .then((response) => {
                console.log(response);
                this.setState({
                    checkLogin: true
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        if (this.state.checkLogin === true) {
            return <Redirect to="/" />
        }

        return (
            <div className="container m-5">

                <div class="card m-5">
                    <h5 class="card-header">Login</h5>
                    <div class="card-body p-3">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter Password" />
                            </div>
                            <button type="login" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;