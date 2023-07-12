import './header.css'
import logo from '../../assets/images/shopping.png'
import {NavLink} from 'react-router-dom'

function Header() {


  return (
    <header>
     <nav className="navbar navbar-expand-lg bg-black">
  <div className="container">
    <img className="navbar-brand" src={logo} height="67" width="60" alt='LOGO'/>
    <span style={{fontFamily:"cursive"}} className="navbar-brand text-white">Ecommerce</span>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/home' className="nav-link text-white">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white">Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white">Home</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </header>

  )
}

export default Header