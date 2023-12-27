import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg " id="nav">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-auto mx-auto text-center fw-bold " id="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/All' className="nav-link active" href="#">ALL</Link>
        </li>
        <li className="nav-item">
          <Link to='/Fsd' className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item">
          <Link to='/Datasceience' className="nav-link" href="#">DATA SCIENCE</Link>
        </li>
        <li className="nav-item">
          <Link to='/Cybersecurity' className="nav-link" href="#">CYBER SECURITY</Link>
        </li>
        <li className="nav-item">
          <Link to='/Career' className="nav-link" href="#">CAREER</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </>
}

export default Navbar