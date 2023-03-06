import React from 'react';
import './CSS/Hero.css'
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <section className= "body-font h-[100vh] image">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full mt-20">
          <Tilt><h1 className="font-[Righteous] leading-snug title-font sm:text-4xl mb-4 font-bolder text-white md:leading-loose" style={{ fontSize:'4rem' }}>TECHNO SCHOOL PROGRAM</h1></Tilt>
          <Tilt><p className="leading-relaxed mb-8 text-8xl lg:text-9xl font-[Caveat] text-yellow-300">Zeitgeist</p></Tilt>
        </div>
      </div>
    </section>
  );
}

export default Hero