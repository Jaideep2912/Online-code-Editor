import React from 'react'
import {Button} from 'react-bootstrap'
import "../Styling/Homepage.css"
import {Link } from "react-location"


 const Homepage = () => {
     return (
     <div> 
     <div class="words word-1">
   <button className="unique">  
  <span>C</span>
  <span>o</span>
  <span>d</span>
  <span>e</span>
  <span>Y</span>
  <span>o</span>
  <span>u</span>
  <span>r</span>
  <span>W</span>
  <span>a</span>
  <span>y</span>
  </button>

</div>
<Link to="/login"><button className="login1">
  Login
</button>
</Link>
<button className="login2">
  Sign-up
</button>
    </div>
     );
 }
 export default Homepage