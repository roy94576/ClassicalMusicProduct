import { Component } from "react";

class Contact extends Component {

    state = {
        fname:"",
        lname:"",
        email:"",
        phone:"",
        message:""
    }
    render() {
        return (
             <div className="container m-5">

            <div class="card m-5">
                <h5 className="card-header">Contact Us</h5>
                <div className="card-body p-3">
                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>First Name</label>
       <input type="fname" value={this.state.fname} onChange={(event) => { this.setState({ fname: event.target.value }) }} className="form-control" placeholder="Enter First Name" />
    </div>
    <div class="form-group col-md-6">
      <label>Last Name</label>
       <input type="lname" value={this.state.lname} onChange={(event) => { this.setState({ lname: event.target.value }) }} className="form-control" placeholder="Enter Last Name" />
    </div>
  </div>
  <div class="form-group">
    <label>Email</label>
     <input type="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} className="form-control" placeholder="Enter Email" />
  </div>
  <div class="form-group">
    <label>Phone</label>
    <input type="password" value={this.state.phone} onChange={(event) => { this.setState({ phone: event.target.value }) }} className="form-control" placeholder="Enter Phone" />
  </div> 
    <div class="form-group ">
     <label>Message</label>
      <textarea type="message" value={this.state.message} onChange={(event) => { this.setState({ message: event.target.value }) }} className="form-control" placeholder="Enter Message" />
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
                </div>
          </div>
        )
    }
}

export default Contact;