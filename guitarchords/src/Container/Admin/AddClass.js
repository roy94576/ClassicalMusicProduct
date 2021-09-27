import axios from "axios";
import { Component } from "react";

class AddClass extends Component{
    state={
      className:"",
      classDate:"",
      Day:"",
      classTime:"",
      pdf:"",
      isInserted:false
    }

    uploadPDF=(e)=>{
      this.setState({
        pdf : e.target.files[0]
      })
    }

    sendClassData=(e)=>{
      e.preventDefault()

      const data = new FormData()

      data.append('className', this.state.className)
      data.append('classDate', this.state.classDate)
      data.append('Day', this.state.Day)
      data.append('classTime', this.state.classTime)
      data.append('pdf', this.state.pdf)

      axios.post("http://localhost:90/class/insert", data)
      .then((response)=>{
        console.log(' booking response ',response)
      }).catch((err)=>{
        console.log(err)
      })
    }

    render(){
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
                        <input type="day" class="form-control" value={this.state.Day} onChange={(event)=>{this.setState({Day:event.target.value})}} placeholder="Enter day"/>
                      </div>

                      <div class="form-group">
                        <label>Time</label>
                        <input type="time" class="form-control" value={this.state.classTime} onChange={(event)=>{this.setState({classTime:event.target.value})}} />
                      </div>
                     
                      <div class="form-group">
                        <label>Guitar PDF</label>
                        <input type="file" class="form-control-file" onChange={this.uploadPDF}/>
                      </div>

                    <button type="submit" onClick={this.sendClassData} class="btn btn-primary">Add Class</button>
                  </form>
                </div>
              </div>
          </div>
        )

    }

}

export default AddClass;