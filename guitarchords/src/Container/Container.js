import { Component } from "react";
import Register from "./Register";
import { Route } from 'react-router-dom'
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Events from "./Events";
import Classes from "./Classes";
import Form from "./Form";
import Logout from "./Logout";
import AddClass from "./Admin/AddClass";
import ViewClass from "./Admin/ViewClass";
import UpdateClass from "./Admin/UpdateClass";




class Container extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/About"exact component={About} />
                    <Route path="/Contacts" exact component={Contact} />
                    <Route path="/Events" exact component={Events} />
                    <Route path="/Classes" exact component={Classes} />
                    <Route path="/Form" exact component={Form} />
                    <Route path="/Logout" exact component={Logout} />
                    <Route path="/AddClass" exact component={AddClass} />
                    <Route path="/ViewClass" exact component={ViewClass} />
                    <Route path="/UpdateClass/:id" exact component={UpdateClass} />
                    



                
                </div>
            </div>

        )
    }
}

export default Container