import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState(null);

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                setError('')
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }

    return (

        <div className='w-2/5 border-4 rounded-2xl p-5 mt-4 mx-auto'>
            <form onSubmit={handleSignUp} className="flex flex-col gap-4 ">
                <h1 className='text-4xl text-center font-semibold py-2'>Sign Up</h1>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        type="text"
                        name="name"
                        placeholder="name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoUrl1"
                            value="Your photo url"
                        />
                    </div>
                    <TextInput
                        id="photoUrl1"
                        type="text"
                        name="photoUrl"
                        placeholder="photo url"
                    />
                </div>
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
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/termsAndConditions"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <div className='bg-red-700 text-white font-semibold rounded-3xl text-center'>
                    <h1>{error}</h1>
                </div>
                <Button type="submit" gradientDuoTone="purpleToBlue" className='w-1/2 mx-auto text-2xl'>
                    <h1 className='text-lg'>Sign Up</h1>
                </Button>
                <div>
                    <p>Already have an account ? <Link to='/login' className="text-blue-600 hover:underline dark:text-blue-500 font-semibold">Login</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;