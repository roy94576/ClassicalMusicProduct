import { Component } from "react";
import { Link } from 'react-router-dom'

class Classes extends Component {
    render() {
        return (
            <div className="mt-5">
                 <h5 className="card-header">Classical Music Genre</h5>
                <div className="container mt-5">
                    <div class="row">
                        <div class="col-lg-4">
                            <Link to="/Form"><img class="rounded-circle" src="./classes1.png" alt="Generic placeholder image" width="140" height="140" /></Link>
                            <h2>Medieval</h2>
                        </div>
                        <div class="col-lg-4">
                        <Link to="/Form"> <img class="rounded-circle" src="./classes2.png" alt="Generic placeholder image" width="140" height="140" /></Link>
                            <h2>Renaissance</h2>
                        </div>
                        <div class="col-lg-4">
                        <Link to="/Form">  <img class="rounded-circle" src="./classes3.png" alt="Generic placeholder image" width="140" height="140" /></Link>
                            <h2>Baroque</h2>
                        </div>
                        <div class="col-lg-4">
                        <Link to="/Form">  <img class="rounded-circle" src="./classes4.png" alt="Generic placeholder image" width="140" height="140" /></Link>
                            <h2>Classical + Romantic</h2>
                        </div>
                        <div class="col-lg-4">
                        <Link to="/Form"> <img class="rounded-circle" src="./classes5.png" alt="Generic placeholder image" width="140" height="140" /></Link>
                            <h2>20th and 21st Century</h2>
                        </div>
                    </div>
                </div>
            </div>
        )


    }

}

export default Classes;