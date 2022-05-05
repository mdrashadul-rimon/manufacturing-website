import React from 'react';

const Blogs = () => {
    return (
        <div className='md:mx-5 mx-3 grid md:grid-cols-3 grid-cols-1 gap-3'>
            <div className='shadow-xl rounded-lg border border-sky-800 px-10 py-5 my-5'>
                <h2 className=' text-xl font-mono font-bold'>1.Difference between <span className='bg-slate-200 px-1 rounded'>authorization</span> and <span className='px-1 bg-slate-200 rounded'>authentication.</span></h2>
                <ul className='text-left my-5 list-decimal'>
                    <span className='font-bold'>Authentication:</span>
                    <li>Checks the persons identity to grant access to the system.</li>
                    <li>Its verifying user's Credentials(user name and password).</li>
                    <li>It is performed at very first step.</li>
                    <li>Ex: online banking login.</li>
                </ul>
                <ul className='text-left my-5 list-decimal'>
                    <span className='font-bold'>Authorization:</span>
                    <li>Checks Persons privileges or permission to access the resources.</li>
                    <li>Its Validating user Permission(user can access after permission).</li>
                    <li>It is useally performed after authentication.</li>
                    <li> Ex:College/multiuser data base.</li>
                </ul>
            </div>
            <div className='shadow-xl rounded-lg border border-sky-800 px-10 py-5 my-5'>
                <h2 className=' text-xl font-mono font-bold'>2.Why are you using <span className='bg-slate-200 px-1 rounded'>firebase</span>? What other options do you have to implement authentication?</h2>

                <ul className='text-left list-decimal'>
                    <p className='my-4'>There are 3 main services I like:</p>
                    <li><span className='font-bold'>Apps development:</span>
                        <ul className='text-left list-disc list-inside'>
                            <li>Firebase web</li>
                            <li>Firebase Auth</li>
                            <li>Cloud storage</li>
                            <li>Realtime Database</li>
                        </ul>
                    </li>
                    <li><span className='font-bold'>Quality Improvement:</span>
                        <ul className='text-left list-disc list-inside'>
                            <li>Firebase crashlytics</li>
                            <li>Performance Monitoring Tools</li>
                            <li>Firebase test lab</li>
                        </ul>
                    </li>
                    <li><span className='font-bold'>Instrument for Business group:</span>
                        <ul className='text-left list-disc list-inside'>
                            <li>Firebase in-app messaging</li>
                            <li>Firebase A/B Testing</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='shadow-xl rounded-lg border border-sky-800 px-10 py-5 my-5'>
                <h2 className=' text-xl font-mono font-bold'>3. What other services does <span className='bg-slate-200 px-1 rounded'>firebase</span> provide other than authentication.</h2>
                <ul className='text-left my-5 list-decimal list-inside'><span className='font-bold'>It provides,</span>
                    <li>Realtime database.</li>
                    <li>Cloud storage.</li>
                    <li>Test lab.</li>
                    <li>Performance Monitoring Tools.</li>
                    <li>In-app messaging for business.</li>
                </ul>
                <a href="https://mongodb.com/docs/" className='bg-blue-400 py-2 px-4 rounded hover:bg-sky-500 transition' target='_blank'>Learn More</a>
            </div>
        </div>
    );
};

export default Blogs;