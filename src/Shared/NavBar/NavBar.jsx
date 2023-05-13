import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {
    const {user, logout} = useContext(AuthContext);
    
    const handleLogout = () =>{
        logout()
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Logout successful',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    //Here are navbar list item
    const listItem = <>
        <li><Link className='btn btn-ghost text-black' to='/'>Home</Link></li>
        <li><Link className='btn btn-ghost text-black' to='/about'>About</Link></li>
    </>
    return (
        <div className=''>
            <div className="navbar max-w-[1200px] mx-auto px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="font-medium menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                        </ul>
                    </div>
                    <Link to="/"><img className='w-[80px]' src={logo} alt="Car Doctor" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-medium menu menu-horizontal px-1">
                        {listItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div><Link to='/profile' className="btn btn-outline btn-error">Profile</Link> <Link onClick={handleLogout} className="btn btn-outline btn-error">Logout</Link></div>
                        : <Link to='/profile' className="btn btn-outline btn-error">Profile</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;