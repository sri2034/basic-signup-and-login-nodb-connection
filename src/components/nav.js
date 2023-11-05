import logo from '../logo.svg'
import {Link} from "react-router-dom";

function nav(){
    return(
        <nav className='navbar bg-primary bg-opacity-10 p-0 mb-3'>
            <Link className='navbar-brand' to="/"><img style={{height:'75px',width:'75px',borderRadius:'5px'}} src={logo} alt="logo" required /></Link>
            <Link className='nav-link ms-auto' to='/Login'><button className='btn btn-primary opacity-75'>Login</button></Link>
            <Link className='nav-link mx-3' to='/Registration'><button className='btn btn-info opacity-75'>Register</button></Link>
        </nav>
    );
}

export default nav;