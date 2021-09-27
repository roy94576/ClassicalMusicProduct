import axios from "axios";
import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    classtype: ""
  }

  makeBooking = (e) => {
    e.preventDefault()

    axios.post("http://localhost:90/makeBooking", this.state)
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
          <h5 className="card-header">Booking</h5>
          <div className="card-body p-3">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label> Name</label>
                  <input type="name" value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} className="form-control" placeholder="Enter Name" />
                </div>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} className="form-control" placeholder="Enter Email" />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="phone" value={this.state.phone} onChange={(event) => { this.setState({ phone: event.target.value }) }} className="form-control" placeholder="Enter Phone" />
              </div>
              <div class="form-group ">
                <label>Class Type</label>
                <textarea type="message" value={this.state.classtype} onChange={(event) => { this.setState({ classtype: event.target.value }) }} className="form-control" placeholder="Enter Class Type" />
              </div>
              <button type="submit" class="btn btn-primary" onClick={this.makeBooking}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;