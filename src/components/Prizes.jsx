import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Prizes = () => {
    AOS.init();
    return (
        <div name='p'>
            <section className="text-white bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-6xl font-medium title-font text-yellow-300 mb-12 text-center">Prizes</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" data-aos="flip-left">
                                <h1 className="text-3xl font-medium title-font text-white mb-12 text-center border-b-4 border-blue-400 pb-2">Open Olympiad</h1>
                                <p className="leading-relaxed mb-6 text-xl">Prizes worth INR 25,000 distributed amongst the winners of both categories.</p>
                                <p className="leading-relaxed mb-6 text-xl">All the grand finalists will be awarded certificates of excellence and goodies.</p>
                                <p className="leading-relaxed mb-6 text-xl">For schools with participation of 50+ students per category, a school winner shall be declared and awarded with goodies and certificate of participation.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" data-aos="flip-right">
                                <h1 className="text-3xl font-medium title-font text-white mb-12 text-center border-b-4 border-blue-400 pb-2">Junior Scientist Competition</h1>
                                <p className="leading-relaxed mb-6 text-xl">The junior scientist competition holds prizes worth INR 25000.</p>
                                <p className="leading-relaxed mb-6 text-xl">All the participants of the junior scientist competition shall be awarded a certificate of participation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Prizes