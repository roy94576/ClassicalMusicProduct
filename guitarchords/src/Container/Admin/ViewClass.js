import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ViewClass extends Component {
  state = {
    class: [],
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  }
  componentDidMount() {
    axios.get("http://localhost:90/all-classes" ,this.state.config)
      .then((alldata) => {
        console.log(alldata)
        this.setState({
          class: alldata.data
        })
      })

      .catch((err) => {
        console.log(err.response)
      })

  }

  Deleteclass = (id) => {
    axios.delete("http://localhost:90/class/delete/" + id)
      .then((response) => {
        console.log(response)
        this.componentDidMount()
      })
      .catch((err) => {
        console.log(err.response)
      }
      )
  }

  render() {
    return (
      <div className="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Class Name</th>
              <th scope="col">Class Date</th>
              <th scope="col">Class Time</th>
              <th scope="col">Days</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
          {
                                   
                                    this.state.class.map((classes) => {
                                        return (
                                            <tr>
                                                <td>{classes.className}</td>
                                                <td>{classes.classDate}</td>
                                                <td>{classes.classTime}</td>
                                                <td>{classes.Day}</td>
                                                <td>
                                                    <button className="edit" title="Edit" value="Update" data-toggle="tooltip"><Link to={"/UpdateClass/" + classes._id}>Update</Link></button>
                                                    <button className="cancel" title="Cancel" data-toggle="tooltip" onClick={this.Deleteclass.bind(this, classes._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

          </tbody>
        </table>
        </div>
        
    
    )
  }
}

export default ViewClass;