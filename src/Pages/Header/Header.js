import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
            >
                <Navbar.Brand href="/">
                    <img
                        src="https://icon-library.com/images/cupcake-icon/cupcake-icon-3.jpg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Cake n Cake logo"
                    />
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
                        Bake n Cake
                    </span>
                </Navbar.Brand>
                <div className="">

                </div>
                <div className="flex md:order-2">
                    {
                        user?.uid ?
                            <>
                                <Button onClick={handleLogOut}>Log Out</Button>
                            </>
                            :
                            <>
                                <Link to={'/login'} className='me-2 p-2 py-2 px-4 rounded-3 bg-light border fw-bold' style={{ textDecoration: 'none' }}>Login</Link>
                                <Link to={'/signup'} className='me-2 p-2 py-2 px-4 rounded-3 bg-red-700 text-white fw-bold' style={{ textDecoration: 'none' }}>Sign Up</Link>
                            </>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/services">
                        Our Services
                    </Navbar.Link>
                    <Navbar.Link href="/blog">
                        Blog
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;