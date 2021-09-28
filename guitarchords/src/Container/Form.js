import axios from "axios";
import { Component } from "react";

class Form extends Component {
  // state = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   classtype: ""
  // }

  // makeBooking = (e) => {
  //   e.preventDefault()

  //   axios.post("http://localhost:90/makeBooking", this.state)
  //     .then((response) => {
  //       console.log(response)
  //     }
  //     )
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  render() {
    return (
     < div classname="container m-5">

            <div class="card m-5">
                <h5 className="card-header">Medieval</h5>
                <div className="card-body p-3">
                <form></form>
      <dl class="row">
      <dt class="col-sm-3">Song</dt>
      <dd class="col-sm-9">Mera Joota hai Jawani</dd>
      <dt class="col-sm-3">Artist</dt>
      <dd class="col-sm-9">
        <p>Mukesh</p><button className="play" title="Play" value="Play" data-toggle="tooltip">Play</button>
      </dd>
      <dt class="col-sm-3">Album</dt>
      <dd class="col-sm-9">Shree 420</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-3">Song</dt>
      <dd class="col-sm-9">Haal kaisa Hai Janab Ka</dd> 
      <dt class="col-sm-3">Artist</dt>
      <dd class="col-sm-9">
        <p>Kishore Kumar Asha Bhosle</p><button className="play" title="Play" value="Play" data-toggle="tooltip">Play</button>
      </dd>
      <dt class="col-sm-3">Album</dt>
      <dd class="col-sm-9">Chalti Ka Naam Gaadi</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-3">Song</dt>
      <dd class="col-sm-9">Bholi Surat Dil ke Khote</dd>
      <dt class="col-sm-3">Artist</dt>
      <dd class="col-sm-9">
        <p>C.Ramachandran Lata Mangeskar</p><button className="play" title="Play" value="Play" data-toggle="tooltip">Play</button>
      </dd>
      <dt class="col-sm-3">Album</dt>
      <dd class="col-sm-9">Albela</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-3">Song</dt>
      <dd class="col-sm-9">Suahan Safar</dd>
      <dt class="col-sm-3">Artist</dt>
      <dd class="col-sm-9">
        <p>Mukesh</p><button className="play" title="Play" value="Play" data-toggle="tooltip">Play</button>
      </dd>
      <dt class="col-sm-3">Album</dt>
      <dd class="col-sm-9">Madhumati</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-3">Song</dt>
      <dd class="col-sm-9">Yeh Hai Bombay Meri Jaan</dd>
      <dt class="col-sm-3">Artist</dt>
      <dd class="col-sm-9">
        <p>Mohammad Rafi</p><button className="play" title="Play" value="Play" data-toggle="tooltip">Play</button>
      </dd>
      <dt class="col-sm-3">Album</dt>
      <dd class="col-sm-9">CID</dd>
    </dl>
    </div>
    </div>
    </div>
    )
  }
}

export default Form;