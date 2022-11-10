import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className='bg-rose-400 container mx-auto'
            >
                <Navbar.Brand href="/">
                    <img
                        src="https://icon-library.com/images/cupcake-icon/cupcake-icon-3.jpg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Cake n Cake logo"
                    />
                    <span className="self-center whitespace-nowrap text-5xl font-semibold dark:text-white">
                        Bake n Cake
                    </span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {
                        user?.uid ?
                            <>
                                <Navbar.Collapse className='mt-1.5 mr-5 pr-5'>
                                    <Navbar.Link href="/myReviews" className='flex justify-start items-center font-semibold text-lg'>
                                        <span >My Reviews</span>
                                    </Navbar.Link>
                                    <Navbar.Link href="/addService" className='font-semibold text-lg'>
                                        <span >Add Service</span>
                                    </Navbar.Link></Navbar.Collapse>

                                <Button gradientDuoTone="purpleToPink" onClick={handleLogOut}>Log Out</Button>
                            </>
                            :
                            <>
                                <Button href='/login' gradientDuoTone="purpleToPink" className='mr-3 p-2 px-2 rounded-3 '>Login</Button>
                                <Button href='/signup' gradientDuoTone="pinkToOrange" className='p-2 mr-3 px-2 rounded-3 '>Sign Up</Button>
                            </>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        className='font-semibold text-lg '
                        href="/">
                        <span >Home</span>
                    </Navbar.Link>
                    <Navbar.Link className='font-semibold text-lg'
                        href="/services">
                        <span >My Services</span>
                    </Navbar.Link>
                    <Navbar.Link className='font-semibold text-lg'
                        href="/blog">
                        <span >Blog</span>
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;