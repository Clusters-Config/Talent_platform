import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import Layout from './wrappers/Layout';
import Profile from "./pages/Profile";
import Home from "./pages/Home";

import { DarkThemeToggle } from "flowbite-react";


const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Findtalent = React.lazy(() => import('./pages/Findtalent'));
const Jobs = React.lazy(() => import('./pages/Jobs'));
const Network = React.lazy(() => import('./pages/Network'));
const Opensource = React.lazy(() => import('./pages/Opensource'));
const SkillTest = React.lazy(() => import('./pages/SkillTest'));
const DashBoard = React.lazy(() => import('./pages/Dashboard'));


const App = () => {

  const location = useLocation();

  return (
    <> 
    
        <div>
          {location.pathname !== '/profile' && location.pathname !== "/login" && location.pathname !== "/register" &&
          location.pathname !== "/skilltest" && location.pathname !=="/home" && <Navbar />}
         

          <Layout>
            {/* Routing between pages */}
            <Routes>
              <Route path="/" element={<Jobs />} />
              <Route path="/login" element={<Suspense><Login /></Suspense>} />
              <Route path="/register" element={<Suspense><Register/></Suspense>}/>
              <Route path="/findtalent" element={<Suspense ><Findtalent /></Suspense>} />
              
              <Route path="/common" element={<Main />} />
              <Route path="/community" element={<Suspense ><Network /></Suspense>} />
              <Route path="/opensource" element={<Suspense ><Opensource /></Suspense>} />
              <Route path="/dashboard" element={<Suspense><DashBoard/></Suspense>} />
              <Route path="/profile" element={<Suspense><Profile/></Suspense>} />
              <Route path="/skilltest" element={<Suspense><SkillTest/></Suspense>} />
              <Route path='/home' element={<Suspense><Home/></Suspense>}></Route>
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            
          </Layout>
          <div className="fixed top-[37rem] right-20 sm:right-4 z-50">
            <DarkThemeToggle 
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </div>
      
    </>
  )
}

export default App;