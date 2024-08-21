import React from 'react'
import{Link} from "react-router-dom"
export const Hero = () => {
  return (
    <div className="container pb-4 border-bottom">
      <div className="row text-center"></div>
      <div className="text-center mt-5">
        <h1>Technology</h1>
        <h6 className="mt-3" style={{ color: "#555555" }}>
          Sleek, modern, and intiutive trading platforms.
        </h6>
        <p>
          check out our <Link style={{textDecoration:"none"}}>investment offerings &rarr;</Link>
        </p>
      </div>
    </div>
  );
}


