import { Component } from "react";
import { Redirect } from 'react-router-dom';
 
class Logout extends Component{
    componentDidMount() {
        window.localStorage.removeItem('token');
 
        window.location.href = "/login"
    }
 
    render() {
        return(
            <div>Unauthorized</div>
        )
    }
}
 
export default Logout;