import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import wavesvg from "../assets/wave-effect.svg"
import Marquee from '../components/Marquee';
import Services from "../components/Services"
import NavHome from "../components/NavHome"
import Resources from '../components/Resources';
import Loading from '../components/Loading';

const Home = () => {
  const navigate = useNavigate();
  const [navBg,setnavBg]= useState(true);
  const scroll = window.scrollY;
  const [colour,setColour]= useState(true)
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white dark:bg-bground text-white ">
      {/* <Navbar customClasses={`${colour ? "text-white":"text-white"} z-50 fixed top-0 -left-5 right-0 ${navBg ?'backdrop-blur-lg':"bg-gray-900"} transiton-colours
      text-lg font-semibold transition-colors translate-x-5 duration-500 ease-in-out `} /> */}
      <NavHome customClasses={`${colour ? "text-white":"text-white"} z-50 fixed top-0 -left-5 right-0 ${navBg ?'backdrop-blur-lg':"bg-gray-900"} transiton-colours
      text-lg font-semibold transition-colors translate-x-5 duration-500 ease-in-out`}  />
        {/* Hero Section */}
        <section className="w-screen py-20  sm:mb-0 bg-hero bg-cover bg-center sm:bg-center bg-no-repeat hero-sec-shadow">
          <div className="grid grid-cols-1 md:grid-cols-1 w-auto text-center gap-8 p-8 items-center rounded-lg ">
            <div>
              <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800">Connect with Professionals in your industry</h1>
              <p className="text-lg sm:text-base md:text-lg lg:text-xl mb-8 text-gray-700">
                Connect with skilled professionals and discover exciting job opportunities.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full sm:py-2 sm:px-4 sm:text-sm lg:py-3 lg:px-6 lg:text-base" onClick={()=>navigate('/login')}>
                Get Started
              </button>
            </div>
            <Marquee/>
          </div>
          <img src={wavesvg} alt="wave" className='w-full -mt-20  sm:mt-[8.2rem]' />
        </section>

        {/* Services Section */}
        <section >

          <Services/>
        </section>

        {/* Resources */}
        <Resources/>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
