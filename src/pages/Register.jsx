import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);
   

    const handlRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const number = form.get('number');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, number, email, password);


        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result)
                Swal.fire(
                    'Register Successfully!',
                    'Congratulations!',
                    'success');
            })
            .catch(error => {
                console.error(error)
                Swal.fire(
                    'Register failed!',
                    'bad lauck!',
                    'question');
            })
    }

    return (
        <div className='bg-[#0000001c] py-5'>

            <form onSubmit={handlRegister} className='md:w-3/4 lg:w-1/2 mx-auto p-20 bg-white'>
                {/* <ToastContainer /> */}
                <h3 className="text-4xl mb-5 text-center">Register your account</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Number</span>
                    </label>
                    <input type="number" name='number' placeholder="Your number" className="input input-bordered" required />
                </div>

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
                    <button className="btn btn-primary">Register</button>
                </div>
                <div>
                    <p className='text-center mt-4'>Already have an account<Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Register;