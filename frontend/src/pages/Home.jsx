import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Heroimage from "../assets/Hero-bg.jpg";

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
  }, [colour ]);

  return (
    <>
      <div className="max-w-screen-2xl bg-gray-900 text-white ">
      <Navbar customClasses={`${colour ? "text-gray-900":"text-white"} z-20 fixed top-0 -left-5 right-0 ${navBg ?'backdrop-blur-sm':"bg-gray-900"} transiton-colours
      text-lg text-800 transition-colors translate-x-5 duration-700 ease-in-out `} />
      
        {/* Hero Section */}
        <section className="container py-20 bg-hero bg-cover bg-center sm:bg-center bg-no-repeat hero-sec-shadow">
        

          <div className="grid grid-cols-1 lg:grid-cols-1 w-fit text-center gap-8 p-10  overlay items-center rounded-lg ">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-gray-800 text-[72px] ">Connect with Professionals in your industry</h1>
              <p className="text-lg mb-8 text-gray-700">
                Connect with skilled professionals and discover exciting job opportunities.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full" onClick={()=>navigate('/login')}>
                Get Started
              </button>
            </div>
            
          </div>
        </section>

        {/* Services Section */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
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
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
