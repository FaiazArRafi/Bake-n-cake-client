import React from 'react';
import { Footer } from 'flowbite-react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footerl = () => {
    return (
        <div className='container mx-auto'>
            <Footer bgDark={true} >
                <div className="w-full bg-pink-700 rounded-lg">
                    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                        <div>
                            <Footer.Title title="Company" className="text-white" />
                            <Footer.LinkGroup col={true} className="text-white">
                                <Footer.Link href="#" className="text-white">
                                    About
                                </Footer.Link>

                                <Footer.Link href="#" className="text-white">
                                    Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="help center" className="text-white" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#" className="text-white">
                                    Discord Server
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Twitter
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Facebook
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Contact Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" className="text-white" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#" className="text-white">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Licensing
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="download" className="text-white" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#" className="text-white">
                                    iOS
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Android
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    Windows
                                </Footer.Link>
                                <Footer.Link href="#" className="text-white">
                                    MacOS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="w-full bg-pink-800 py-6 px-4 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Bake n Cake™"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
                            <Footer.Icon
                                href="#"
                                icon={FaFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaGithub}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaDribbble}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Footerl;