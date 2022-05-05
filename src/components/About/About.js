import React from 'react';

const About = () => {
    return (
        <div className="md:mx-5 mx-3">
            <div className='flex md:flex-row flex-col items-center gap-4 my-5 mx-5'>
                <div className="w-auto md:order-1 order-2 shadow-xl rounded-lg">
                    <a href="https://www.linkedin.com/in/md-rashadulalam/" target="_blank"><img src="https://mdrashadul-rimon.github.io/service-images/RashadulPhoto300x300.jpg" alt="Rimons Photo" /></a>
                </div>
                <div className="md:order-2">
                    <h1 className='text-3xl font-extralight mb-5 text-left'>Personal Details</h1>
                    <p className='flex flex-col gap-2'>
                        <span className='text-7xl text-lime-600 font-bold text-left'>Rashadul Alam</span> <br />
                        <span className='text-2xl text-left'>Date of birth: 12.01.1997</span>
                        <span className='text-2xl text-left'>Work: Web Developer</span>
                    </p>
                </div>
            </div>

            <div className="mx-4">
                <h1 className='text-3xl font-extralight my-5 text-left'>About Me</h1>
                <p className='font-light text-lg text-justify'>
                    I'm a front-end web developer currently learning from Programming Hero
                    course conduct by Jhankar Mahbub. With recent graduation, I am seeking an
                    entry-level position in a reputed organization where my strong technical,
                    analytical and problem- solving skills will be well utilized. I am organized and
                    dependable candidate successful at managing multiple priorities with a positive
                    attitude. Willingness to take on added responsibilities to meet team goals.
                </p>
                <p className='font-light text-lg text-justify my-2'>
                    My goal is to meet the heighest level of front end programming. And in future I would like to develop web-3.0, solidity, blockchain and so on.
                </p>
                <p className='font-light text-lg text-justify'>
                    I code 12 to 14 hours a day. some times more than 14 hours when a task has been submitted.
                </p>
                <h1 className='text-3xl font-extralight my-5 text-left'>Education</h1>
                <p className='text-2xl text-left'>B. Sc in Computer Science Engineering</p>
                <p className='text-left'>Bangladesh Army University of Engineering and Technology, Qadirabad Cantonment</p>
            </div>
        </div>

    );
};

export default About;