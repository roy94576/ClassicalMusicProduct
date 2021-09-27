import { Component } from "react";

class Home extends Component {
render()
{
  return(
  
          <div className="container">

            <div className="mt-5">
                  <div class="card-deck">
                    <div class="card">
                      <img class="card-img-top" src="./classicalmusic.jpg" alt=""/>
                      <div class="card-body">
                        <h5 class="card-title">Classical Music</h5>
                        <p class="card-text">The guitar is classified as a chordophone – meaning the sound is produced by a vibrating string stretched between two fixed points. Historically, 
                        a guitar was constructed from wood with its strings made of catgut.</p>
                      </div>
                      <div class="card-footer">
                      </div>
                    </div>
                    <div class="card">
                      <img class="card-img-top" src="./img8.jpg" alt=""/>
                      <div class="card-body">
                        <h5 class="card-title">Music</h5>
                        <p class="card-text">Music is the art of arranging sounds in time to produce a composition through the elements of melody, harmony, rhythm, and timbre.
                        It is one of the cultural universal aspects of all human societies.</p>
                      </div>
                      <div class="card-footer">
                      </div>
                    </div>
                    <div class="card">
                      <img class="card-img-top" src="./classical.jpg" alt=""/>
                      <div class="card-body">
                        <h5 class="card-title">Classical Music Concert</h5>
                        <p class="card-text">Classical Music is performed with a vast range of instruments and vocal techniques ranging from singing to rapping; 
                        there are solely instrumental pieces, solely vocal pieces (such as songs without instrumental accompaniment) and pieces that combine singing and instruments.</p>
                      </div>
                      <div class="card-footer">
                      </div>
                    </div>
                  </div>
                </div>
            </div>

      
  )
}
}


export default Home;