import React from 'react'

const FAQ = () => {
    return (
        <>
            <section className="body-font bg-gray-900" name='f'>
                <div className="container mx-auto flex px-24  items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full mt-10">
                        <p className="leading-relaxed mb-1 text-6xl text-yellow-300">FAQ's</p>
                    </div>
                </div>
            </section>
            <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-800">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-white title-font mb-2">Q. What is the Syllabus for TSP Open Olympiad?</h2>
                                <p class="leading-relaxed">Ans: The exam is filled with fascinating and intriguing questions that will test your logical reasoning and thinking skills.</p>
                            </div>
                        </div>
                        <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-white title-font mb-2">Q. Even though my school is not tied up with TSP, can I participate in the open olympiad?</h2>
                                <p class="leading-relaxed">
                                    Ans: No, registration can only be done through school for the open olympiad but the junior scientist program is open for individual participation.
                                </p>
                            </div>
                        </div>
                        <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-white title-font mb-2">Q. What are the prerequisites to appear in TSP?</h2>
                                <p class="leading-relaxed">Ans: No such prerequisite is required. Only school-standard knowledge will be enough.</p>
                            </div>
                        </div>
                        <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-white title-font mb-2">Q. When will we receive our admit card for Phase 2?</h2>
                                <p class="leading-relaxed">Ans: No individual admit cards will be provided. The selected students will be informed by their respective schools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ