import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      IBuy
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        
      </ul>
      </div>
      <form className='d-flex mx-3'>
            <Link className='btn btn-outline-dark fa-lg' to="/cart"><i class="fa fa-cart-plus" ></i></Link> 
            <Link className='btn btn-dark mx-3' to="/login" role='button'>Login</Link>
            <button className='btn btn-dark' to="/signup" role='button'>Sign Up</button>
      </form>
 
  </div>
</nav>


   
  )
}

export default NavBar