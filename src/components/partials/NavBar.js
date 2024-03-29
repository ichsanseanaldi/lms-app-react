import React from "react"
import {Link} from "react-router-dom"

export const NavBarLanding = () => {
  const path = window.location.pathname

  return (
    <div className='fixed-nav'>
      <div className='flex nav-main'>
        <div className='flex'>
          <p className='p-10-ub rubik'>
            <i>FWTL.</i>
          </p>
        </div>
        <div className='flex flex-j-end nav-link-group'>
          <div className={`link-nav-main ${path === "/" ? "active" : ""}`}>
            <Link to={"/"}>Home</Link>
          </div>
          <div className={`link-nav-main ${path === "/login" ? "active" : ""}`}>
            <Link to={"/login"}>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
