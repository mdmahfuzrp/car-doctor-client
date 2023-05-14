import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
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
    return (
        <div className="card border w-full md:w-3/5 mx-auto items-center my-12 pt-10 pb-3">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt='Welcome' />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.displayName}</h2>
                <p>{user.email}</p>
                <div className='flex'>
                    <button onClick={handleLogout} className='m-1 btn btn-outline btn-error'>Logout</button>
                    <Link to='/' className='m-1 btn btn-outline btn-error'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;