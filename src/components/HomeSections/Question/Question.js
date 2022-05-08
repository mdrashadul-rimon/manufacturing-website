import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div >
            <h2 className='font-bold text-4xl text-gray-700'>Frequently Asked Question</h2>
            <div className='mx-auto grid md:grid-cols-2 grid-cols-1 my-5 gap-5 justify-center items-center'>

                <div className='mx-4'>
                    <div className="flex flex-col items-center justify-center my-5">

                        <div className="w-full">
                            <input type="checkbox" name="panel" id="panel-1" className="hidden" />
                            <label for="panel-1" className="relative block text-white text-xl font-semibold p-4 shadow border-b border-grey rounded-lg accordion">Who we are?</label>
                            <div className="accordion__content overflow-hidden bg-grey-lighter">
                                <h2 className="accordion__header pt-4 pl-4 text-left font-medium">Warehouse TechSolution</h2>
                                <p className="accordion__body p-4 text-left" id="panel1">Warehouse Techsolution is a complete technical solution based company who serve tech based products on the customers requirement.</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <input type="checkbox" name="panel" id="panel-2" className="hidden" />
                            <label for="panel-2" className="relative block bg-black text-white p-4 shadow border-b border-grey rounded-lg">Why us?</label>
                            <div className="accordion__content overflow-hidden bg-grey-lighter">
                                <h2 className="accordion__header pt-4 pl-4 text-left font-medium">We are commited</h2>
                                <p className="accordion__body p-4 text-left">Customers choose us for our dignitiy. We are committed to proving ourself as a valued company for our customers to reach the best of their askings.</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <input type="checkbox" name="panel" id="panel-3" className="hidden" />
                            <label for="panel-3" className="relative block bg-black text-white p-4 shadow border-b border-grey rounded-lg">How to reach?</label>
                            <div className="accordion__content overflow-hidden bg-grey-lighter">
                                <h2 className="accordion__header pt-4 pl-4 text-left font-medium">Contact our head branch</h2>
                                <p className="accordion__body p-4 text-left">To get the latest products at a wholesale price to every dealers, and shops please contact to our head branch to take a token and then contact to your nearest Warehouse TechSolution.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-4'>
                    <iframe className='w-full' width="500" height="380" src="https://www.youtube.com/embed/smilviq8tv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Question;