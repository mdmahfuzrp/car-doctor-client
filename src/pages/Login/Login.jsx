import { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {login, googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/profile";

    const handleLogin = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true })
            Swal.fire({
                title: 'Success!',
                text: 'Welcome, login successful',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        })
        .catch(error =>{
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Something wrong, please try again',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
        })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(()=>{
            navigate(from, { replace: true })
            Swal.fire({
                title: 'Success!',
                text: 'Welcome, login successful',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        })
        .catch(error => {console.log(error)})
    }
    const handleGithubLogin = () =>{
        githubLogin()
        .then(()=>{
            navigate(from, { replace: true })
            Swal.fire({
                title: 'Success!',
                text: 'Welcome, login successful',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        })
        .catch(error => {console.log(error)})
    }

    return (
        <div className='py-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row  w-full justify-evenly">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm border py-6 px-7">
                        <h1 className='text-[36px] text-[#444444] text-center font-semibold'>Login</h1>
                        <div className="card-body p-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-[17px] font-medium text-error label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="text-[17px] input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-[17px] font-medium text-error label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="text-[17px] input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="text-[17px] text-error label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-error text-white">Login</button>

                            </div>
                            <div className='flex items-center px-5 mt-2'>
                                <div className="w-1/2 h-[2px] bg-base-300"></div>
                                <p className='px-5 text-gray-500'>or</p>
                                <div className="w-1/2 h-[2px] bg-base-300"></div>
                            </div>
                            <div className='flex justify-center'>
                                <Link onClick={handleGoogleLogin} className='list-none bg-base-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-base-300 m-1'><FaGoogle size={23} /></Link>
                                <Link onClick={handleGithubLogin} className='list-none bg-base-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-base-300 m-1'><FaGithub size={23} /></Link>
                            </div>
                            <div className='flex justify-center'>
                                <label className="text-[16px] text-[#737373]">
                                    New in this site?
                                    <Link to='/signup' className="text-[16px] ms-1 text-error label-text-alt link link-hover">Sign Up</Link>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;