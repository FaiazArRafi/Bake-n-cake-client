import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        console.log(event)
        event.preventdefault();
        const form = event.target;
        console.log(form);
    }

    return (
        <div className='w-2/5 border-4 rounded-2xl p-5 mx-auto mt-8'>
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
                        placeholder="password"
                        required={true}
                    />
                </div>
                <Button type="submit" gradientDuoTone="purpleToBlue" className='w-1/2 mx-auto text-2xl'>
                    <h1 className='text-lg'>Login</h1>
                </Button>
            </form>

        </div>
    );
};

export default Login;