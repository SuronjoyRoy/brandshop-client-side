import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const {logInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate(); 
    console.log(location);

    const handlLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        logInUser(email, password)
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'login Successfully!',
               'Congratulations!',
               'success');
            navigate(location?.state? location.state : '/')

            
        })
        .catch(error=>{
            console.error(error)
            Swal.fire(
                'login failed!',
               'Wrong Information!',
               'question');
        })

    }
    return (
        <div className='bg-[#0000001c] py-5'>
                
                <form onSubmit={handlLogin} className='md:w-2/4 lg:w-1/2 mx-auto bg-white p-20'>
                <h3 className="text-4xl my-10 text-center">Login your account</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
               
                <p className='text-center mt-2'>Do not have an account  <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
                <p className='text-center'><button onClick='' className="btn btn-ghost">google</button></p>
                </form>
                
        </div>
    );
};

export default Login;