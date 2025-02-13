import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Userimage from "../assets/Hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-gray-900 text-white">
        <Navbar customClasses="text-white" />

        {/* Hero Section */}
        <section className="container mx-auto py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center m-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">Find the Perfect Talent or Job</h1>
              <p className="text-lg mb-8">
                Connect with skilled professionals and discover exciting job opportunities.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full" onClick={()=>navigate('/login')}>
                Get Started
              </button>
            </div>
            <div>
              <img
                src={Userimage}
                alt="Hero Image"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto py-12">
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
