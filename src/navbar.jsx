import { NavLink } from "react-router-dom"



export function NavBar () {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="nav-item">Home</NavLink>
      <NavLink to={"/about"} className="nav-item">About</NavLink>
    </div>
  )
} 
