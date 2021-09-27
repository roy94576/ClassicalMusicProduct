import axios from "axios";
import { Component } from "react";
 
class UpdateClass extends Component {
 
    state = {
        className: '',
        classDate: '',
        classTime: '',
        Day:'',
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
 
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:90/single/class/' + this.state.id)
        .then((response) => {
            this.setState({
                className: response.data.className,
                classDate: response.data.classDate,
                classTime: response.data.classTime,
                Day: response.data.Day
            })

        })
        .catch((err) => {
            console.log(err.response);
        })
}

    UpdateClass = (e) => {
        e.preventDefault();

        const data = {
            className: this.state.className,
            classDate: this.state.classDate,
            classTime: this.state.classTime,
            Day: this.state.Day
        }
 
 
        axios.put('http://localhost:90/class/update/'+this.state.id, data)
            .then((response) => {
                console.log(response)
                this.setState({
                    className:'',
                    classDate:'',
                    classTime:'',
                    Day:''
               })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return(
            <div className="container m-5">
                <div class="card m-5">
                <h5 className="card-header">Add Class</h5>
                <div className="card-body p-3">

                    <form>
    
                      <div class="form-group">
                        <label>Class Name</label>
                        <input type="text" class="form-control" value={this.state.className} onChange={(event)=>{this.setState({className:event.target.value})}} placeholder="Enter Class Name"/>
                      </div>

                      <div class="form-group">
                        <label>Date</label>
                        <input type="date" class="form-control" value={this.state.classDate} onChange={(event)=>{this.setState({classDate:event.target.value})}} placeholder="Enter Date"/>
                      </div>

                      <div class="form-group">
                        <label>Day</label>
                        <input type="day" class="form-control" value={this.state.classDay} onChange={(event)=>{this.setState({classDay:event.target.value})}} placeholder="Enter day"/>
                      </div>

                      <div class="form-group">
                        <label>Time</label>
                        <input type="time" class="form-control" value={this.state.classTime} onChange={(event)=>{this.setState({classTime:event.target.value})}} />
                      </div>

                    <button type="submit" onClick={this.UpdateClass} class="btn btn-primary">Update Class</button>
                  </form>
                </div>
              </div>
          </div>
        
          
        )

    }
}

export default UpdateClass;