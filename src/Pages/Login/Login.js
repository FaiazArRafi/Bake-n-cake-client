import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const { signIn, providerLogin, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

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
        <div className='w-2/5 border-4 rounded-2xl p-5 mt-4 mx-auto'>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 ">
                <h1 className='text-4xl text-center font-semibold py-2'>Login</h1>
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
            </form>
        </div>
    );
};

export default Login;