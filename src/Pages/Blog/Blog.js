import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='border my-8 rounded-md p-3 w-1/2 mx-auto p-5 border'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title className='p-3 rounded-lg mb-3 p-9'>
                        <h4 className='font-semibold text-2xl py-2'> Q: What is the difference between SQL and NoSQL?</h4>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 dark:text-gray-400 ">
                            The five differences between SQL vs NoSQL are:
                            <br />
                            1.  SQL databases are relational, NoSQL databases are non-relational.<br />
                            2.  SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                            3.  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                            4.  SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                            5.  SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='p-3 rounded-lg mb-3 p-9'>
                        <h4 className='font-semibold text-2xl py-2'> Q: What is JWT, and how does it work?</h4>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2  dark:text-gray-400 ">
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />

                            JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.<br />
                            Once decoded, we will get two JSON strings:<br />

                            1. The header and the payload.<br />
                            2. The signature.<br />
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.<br />

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br />

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory.<br />

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='p-3 rounded-lg mb-3 p-9'>
                        <h4 className='font-semibold text-2xl py-2'> Q: What is the difference between javascript and Node JS?</h4>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2  dark:text-gray-400 ">
                            <div className='flex justify-between'>
                                <p className='w-1/2 p-2'>1. Javascript is a programming language that is used for writing scripts on the website. </p>
                                <p className='w-1/2 p-2'>2. NodeJS is a Javascript runtime environment.</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='w-1/2 p-2'>2. Javascript can only be run in the browsers. </p>
                                <p className='w-1/2 p-2'>2. It is possible to run Javascript outside the browser with the help of NodeJS.</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='w-1/2 p-2'>3. Javascript is used in frontend development. </p>
                                <p className='w-1/2 p-2'>3. Nodejs is used in server-side development.</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='w-1/2 p-2'>4. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </p>
                                <p className='w-1/2 p-2'>4. Nodejs is written in C, C++ and Javascript.</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='w-1/2 p-2'>5. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </p>
                                <p className='w-1/2 p-2'>5. Nodejs is written in C, C++ and Javascript.</p>
                            </div>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='p-3 rounded-lg mb-3 p-9'>
                        <h4 className='font-semibold text-2xl py-2'> Q: How does NodeJS handle multiple requests at the same time?</h4>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2  dark:text-gray-400 ">
                            Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly, <br />

                            Another important things is: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>


            </Accordion>
        </div>
    );
};

export default Blog;