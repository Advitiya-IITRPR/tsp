import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="body-font bg-gray-900" name='c'>
        <div className="container mx-auto flex px-24  items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full mt-10">
            <p className="leading-relaxed mb-1 text-6xl text-yellow-300">Contact Us</p>
          </div>
        </div>
      </section>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full mx-auto " src={require('../Assets/chena.jpg')} />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Chena Ram Kumawat</h2>
              <p class="leading-relaxed text-2xl">TSP Head</p>
              <p class="leading-relaxed text-2xl">+91-9649766876</p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full mx-auto " src={require('../Assets/harsh.jpeg')} />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Harsh Singhal</h2>
              <p class="leading-relaxed text-2xl">TSP Head</p>
              <p class="leading-relaxed text-2xl">+91-7728837630</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact