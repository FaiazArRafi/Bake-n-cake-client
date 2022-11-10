import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [error, setError] = useState('');

    const { signIn, providerLogin, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='w-2/5 border-4 rounded-2xl p-5 my-4 mx-auto'>
            <h1 className='text-4xl text-center font-semibold py-2'>Login</h1>
            <div>
                <Button onClick={handleGoogleSignIn} className='my-2 mx-auto ' color="light"><span className='text-3xl pr-2'><FcGoogle /> </span> <h1 className='text-lg'>Login with Google</h1></Button>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 ">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name="email"
                        placeholder="email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name="password"
                        placeholder="password"
                        required={true}
                    />
                </div>
                <div className='bg-red-700 text-white font-semibold rounded-3xl text-center'>
                    <h1>{error}</h1>
                </div>
                <Button type="submit" gradientDuoTone="purpleToBlue" className='w-1/2 mx-auto text-2xl'>
                    <h1 className='text-lg'>Login</h1>
                </Button>
                <div>
                    <p>Don't have an account ? <Link to='/signup' className="text-blue-600 hover:underline dark:text-blue-500 font-semibold">Sign Up</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Login;