import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Header = () => {
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
                <div className="flex md:order-2">
                    <Button href='/login'>
                        Login
                    </Button>
                    <Button href='/signup'>
                        Sign Up
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
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