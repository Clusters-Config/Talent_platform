import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import wavesvg from "../assets/wave-effect.svg"
import Marquee from '../components/Marquee';
import Services from "../components/Services"

const Home = () => {
  const navigate = useNavigate();
  const [navBg,setnavBg]= useState(true);
  const scroll = window.scrollY;
  const [colour,setColour]= useState(true)
  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setnavBg(false);
        setColour(false)
      } else {
        setnavBg(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div className=" bg-bground text-white ">
      <Navbar customClasses={`${colour ? "text-gray-900":"text-white"} z-20 fixed top-0 -left-5 right-0 ${navBg ?'backdrop-blur-sm':"bg-gray-900"} transiton-colours
      text-lg text-800 transition-colors translate-x-5 duration-500 ease-in-out `} />
      
        {/* Hero Section */}
        <section className="container py-20 mb-20 sm:mb-0 bg-hero bg-cover bg-center sm:bg-center bg-no-repeat hero-sec-shadow">
        

          <div className="grid grid-cols-1 sm:mt-24 lg:grid-cols-1 w-auto sm:p-2  text-center gap-8 p-8 items-center rounded-lg ">
            <div>
              <h1 className="text-5xl sm:text-[48px] font-bold mb-4 text-gray-800 text-[72px] ">Connect with Professionals in your industry</h1>
              <p className="text-lg mb-8 sm:mb-4 sm:text[10px] text-gray-700 sm:mt-14">
                Connect with skilled professionals and discover exciting job opportunities.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full " onClick={()=>navigate('/login')}>
                Get Started
              </button>
            </div>
            <Marquee/>
          </div>
          <img src={wavesvg} alt="wave" className='w-full -mt-20 sm:mt-[5.3rem]' />
        </section>

        {/* Services Section */}
        <section className="container">
          {/* <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 m-4 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Talent Sourcing</h3>
              <p>Find the best talent for your organization.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Job Matching</h3>
              <p>Discover job opportunities that match your skills and experience.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Career Development</h3>
              <p>Enhance your career with our development resources.</p>
            </div>
          </div> */}

          <Services/>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
