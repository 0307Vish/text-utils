 
import PropTypes from 'prop-types'
import React  from 'react'
import { Link, Outlet } from 'react-router-dom'
import Alert from './Alert'

export default function Navbar(props) {


  
  return (
    <div >
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    > 
  <div className="container-fluid"   >
    <a className="navbar-brand"  >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link className="nav-link active" aria-current="page"  to="/">{props.frst}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">{props.scnd}</Link>
        </li>        
      </ul>
      <form className="d-flex" role="search">
        <input style={{backgroundColor:props.mode ==='dark'?'#1f2327':'azure' ,color:props.mode ==='dark'?'azure':'black'}} className="form-control me-2 bg-ligth" type="search" placeholder="Search" aria-label="Search" />
        <button     className="btn btn-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
  <div className={`form-check form-${props.mode==='light'?'dark':'light'}`}>
  {/* this is to change the color of text of button with change in bg color */}

  <div class="form-check form-switch">
  <input  className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Dark</label>
  </div>
</div>
</nav>
<Alert alert={props.alert} />

<Outlet/>

    </div>
  )
}


//this is providing data type to props elements
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  frst:PropTypes.string.isRequired,
  scnd:PropTypes.string.isRequired
}


// this is for setting default values of props elements
Navbar.defaultProps={
  title:"set title here",
  frst:"set frst here",
  scnd:"set scnd here"
}




