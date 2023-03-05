import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Registration = () => {
    AOS.init();
    return (
        <>
            <section className="text-white bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xlfont-medium title-font text-center text-white mb-20">Registration Process
                        <br className="hidden sm:block" />
                    </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex" data-aos="fade-down-up">
                            <div className="flex-grow pl-6">
                                <h2 className="text-white text-2xl border-b-2 mb-3 border-blue-300 title-font font-medium">Open Olympiad</h2>
                                <p className="leading-relaxed text-base">1. The participation fees for Open Olympiad are INR 50 per participant for category-1(8th, 9th and 10th class) students and INR 100 per participant for category-2(11th and 12th class) students.<br /><br />2. Schools are requested to collect money from the students and register them through the <a href='https://docs.google.com/forms/d/e/1FAIpQLSdOWJypP-0uMtF82x05DzooDX7k59ELdWssJKI1vqCWakXQBg/viewform'>Google Form</a> </p><br />3. If a student is registering directly then he/she needs to register through <a href='https://docs.google.com/forms/d/e/1FAIpQLScCFV00Ieo-dRm8knemvK7szAtlweHFVKm-w540suSZw_QZBQ/viewform'>this form </a> This form will be open till 12th march 11:59 pm.
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex" data-aos="fade-down-up">
                            <div className="flex-grow pl-6">
                                <h2 className="text-white text-2xl border-b-2 mb-3 border-blue-300 title-font font-medium">Junior Scientist Program</h2>
                                <p className="leading-relaxed text-base">1. The participation fees for Junior Scientist Competition are INR 150 per team <br /><br />2. Individual registration by each team is required.
                                </p><br />3. Only one member from a team are requested to do the same on zeitgeist’s website through the <a href='https://docs.google.com/forms/d/e/1FAIpQLSdyPCe8xpISvE1sV8QLIethkg_gJCErmEXCslzs9vnA7Ahbiw/viewform'>Google Form</a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex" data-aos="fade-down-up">
                            <div className="flex-grow pl-6">
                                <h2 className="text-white text-2xl border-b-2 mb-3 border-blue-300 title-font font-medium">Techwalk</h2>
                                <p className="leading-relaxed text-base">1. Students who have registered for Open Olympiad from school and Junior Scientist Program need not to register for Techwalk; they are directly eligible for Techwalk.</p> <br /> <p>2. Top 10% of students who are directly registering for Open Olympiad will be eligible for Techwalk. </p><br /><p>3. Students who have not registered for the Open Olympiad and Junior Scientist Program and want to get exposure to IIT can register for it.</p><br /><p>4. The Registration fee is INR 60 per participant for category-1(8th, 9th and 10th class) students and INR 120 per participant for category-2(11th and 12th class) students.
                                </p><br /><p>5. Students do not have to register individually.</p><br /><p>6. Schools are requested to collect money from the students and register them through the <a href='https://docs.google.com/forms/d/e/1FAIpQLSdwgpQh7xY6Y27EFRbQrB6UA-ssfEIhRDhAA07zb3mnWuv2QA/viewform'>Google Form.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration