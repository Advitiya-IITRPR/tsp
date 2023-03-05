import React from 'react'

const Highlights = () => {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font" name='h'>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xlfont-bolder title-font text-yellow-300 lg:w-1/3 lg:mb-0 mb-4">Highlights</h1>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={require('../Assets/img1.jpg')} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={require('../Assets/img2.jpg')} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={require('../Assets/img3.jpg')} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={require('../Assets/img4.jpg')} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://drive.google.com/uc?export=view&id=1WfIKmpaXovh49yfvHTcmbx9kD8KoC2tA" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={require('../Assets/pic1.png')}  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Highlights