import React, { Component } from 'react'
 
class Footer extends Component{
    render(){
        return(
            <footer className="py-2" style={{ backgroundColor: '#87d3d3' }}>
    <div className="container">
    <div>
                <div className="container mt-5">
                    <div className="row">
                    <div className="col-lg-3" >
                        <div className="col-lg-4"><img src="../classical1.jpg" alt="" width="180" className="mb-3" /></div>

                            <div id="companyinfo"> <a id="sitelink" href="#">Classical Music Streaming</a>
                                <p id="detail">We are a music and culture led non-profit organization with a mission: we want to promote formal music education. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="explore">
                                <p id="txt1">Explore</p> 
                                <a class="link" href="Home">Home</a><br></br>
                                <a class="link" href="About">About</a><br></br>
                                <a class="link" href="Events">Events</a><br></br>
                                <a class="link" href="Classes">Classes</a><br></br>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="visit">
                                <p id="txt2">Visit</p>
                                <p class="text">Classical Music Streaming</p>
                                <p class="text">Old Baneshwor, Battisputali </p>
                                <p class="text">Kathmandu, Nepal </p>
                                <p class="text">Phone: +977 9861321507 </p>
                                <p class="text">Fax: (+977) 2363-0350 </p>
                            </div>
                        </div>
 
                <div className="col-lg-3">
                    <div id="legal">
                        <p id="txt3">Legal</p> <a class="link1" href="#">Terms and Conditions</a>
                        <p id="txt3"></p><a class="link1" href="#">Private Policy</a>
                    </div>
                    </div>
                        </div>
                <div className="col-lg-3">
                <p id="txt6"><i class="material-icons tiny"></i>Copyright 2021 Classical Music Streaming - All right reserved</p>
         </div>
                </div>
                        </div>
                    </div>
                    {/* </div> */}
  </footer>
               
                
        )
    }
}
 
export default Footer




