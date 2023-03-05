import React from 'react'
import Contact from './Contact'
import FAQ from './FAQ'
import Highlights from './Highlights'
import Prizes from './Prizes'
import Registration from './Registration'
import Testimonials from './Testimonials'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Conduction = () => {
    AOS.init();
    return (
        <div className='h-[100vh]' name='conduction'>
            <section className="body-font bg-gray-900">
                <div className="container mx-auto flex px-24  items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full mt-10">
                        <p className="leading-relaxed mb-1 text-6xl text-yellow-300">Conduction</p>
                        <p className="leading-relaxed mb-1 text-xl text-gray-300">The event will be organized in two categories.<br />
                            Category-1: 8th to 10th className<br />
                            Category-2: 11th and 12th className
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10  mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="hidden lg:block object-center h-[30%] w:[70%] w-[100vw] mt-10" src={require('../Assets/Phase1.png')} />
                        <img alt="feature" className="hidden lg:block object-center h-[30%] w-[100vw] mt-10" src={require('../Assets/jsc.png')} />
                        <img alt="feature" className="hidden lg:block object-center h-[30%] w-[100vw] mt-10" src={require('../Assets/quiz-img.png')} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center" data-aos="fade-right">
                            <div className="flex-grow">
                                <h2 className="text-white text-4xl text-bold title-font font-medium mb-3">Phase - 1</h2>
                                <p className="leading-relaxed text-bold text-xl">1. Registration through school: It will be conducted on the school level and it can be either online or offline as per the preference of the school. The pattern of the exam will be objective type consisting of three sections with a time limit of 90 mins For detailed syllabus look into the <a href='https://drive.google.com/file/d/1dzSuKeuiusXtJYFmeS6XK4jEXdH7TNIR/view?usp=sharing'>attachment</a>. The top 5% of participants from each school will qualify for Phase 2. All the participants who participate in stage-1 will also get an opportunity for Techwalk.<br />
                                    2. Direct registration of participants: It will be conducted in online mode on 14th march from 6.00 pm to 7.30 pm. The pattern of will be objective type consisting of three sections with a time limit of 90 mins For detailed syllabus look into the attachment. Top 10% of participants will qualify for Phase-2 and they will be eligible for Techwalk. </p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center" data-aos="fade-left">
                            <div className="flex-grow">
                                <h2 className="text-white text-4xl title-font font-medium mb-3">Phase-2</h2>
                                <p className="leading-relaxed text-bold text-xl">This phase will be conducted in IIT Ropar during Zeitgeist’23. The pattern of the exam will be objective type consisting of three sections with a time limit of 90 mins syllabus will be the same as Phase-1. Phase 2 will be conducted during Zeitgeist’23 on 23rd March The winners will be awarded.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center" data-aos="fade-right">
                            <div className="flex-grow">
                                <h2 className="text-white text-bold text-4xl title-font font-medium mb-3">Junior Scientist Competition</h2>
                                <p className="leading-relaxed text-bold text-xl">In this competition, a maximum of three projects are allowed for display by individual schools in each category. The projects will be presented at IIT Ropar during Zeitgeist’23. Project should be working based on any scientific technology. Exciting prizes for winners and certificates of participation for all the participants. All the participants will also get an opportunity for Techwalk.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center"data-aos="fade-left">
                            <div className="flex-grow">
                                <h2 className="text-white text-4xl title-font font-medium mb-3">Techwalk</h2>
                                <p className="leading-relaxed text-bold text-xl">During Zeitgeist 2023, all of our institute's participating labs will be open to school students. Various departments will demonstrate cutting-edge technologies in their respective areas. Aside from the labs, there will be an exhibition of projects created by students and faculty. There will be exhibitors from across the globe displaying emerging technologies. For the visitors, this will be a great opportunity to learn, experience, and interact with experts from distinct scientific fields and witness the recent advancements in the field of science. Students will experience the culture of IIT Ropar, student life, and the responsibilities of students here. They gain a lot of valuable information about cracking the JEE exam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Registration/>
            <Prizes/>
            <Testimonials/>
            <Highlights/>
            <FAQ/>
            <Contact/>
        </div>
    )
}

export default Conduction