import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
    AOS.init();
    return (
        <div className='bg-gray-900' name='about'>
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full mt-10">
                        <p className="leading-relaxed mb-1 text-6xl text-yellow-300">About Us</p>
                    </div>
                </div>
            </section>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col" data-aos="fade-up">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-white text-4xl title-font font-bold mb-3">What is TSP?</h2>
                                    <p className="leading-relaxed text-xl text-bold text-white">Zeitgeist’23 presents the second edition of TSP,i.e, Techno School Program, a school outreach program for 8th to 12th-grade students. It consists of an annual competition wherein students compete in two phases of the Open Olympiad and flex their skills through the Junior Scientist Competition. Phase 1 of the Olympiad will be conducted in schools if the school is participating and if students are directly registering then it will be conducted online on 16th march from 6.00 pm to 7.30 pm. Phase 2 will be conducted during Zeitgeist’23 on 23rd March.</p>
                                    <a className="mt-3 text-yellow-200 inline-flex items-center" href='https://drive.google.com/file/d/1PU0nopfQdldjRtk6mHtvBlR-ezicE7zY/view'>Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col" data-aos="fade-down">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-white text-4xl title-font font-bold mb-3">Why TSP?</h2>
                                    <p className="leading-relaxed text-xl text-bold text-white">TSP aims to bring together the best young minds from all over the country under one roof and to expose the students to the technical culture of IIT Ropar. The main objective of which is developing and nurturing younger minds of the country at the grassroots level. It provides a platform for school kids to learn core experience and knowledge, exercise coordination abilities, to think outside the box while proposing solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About