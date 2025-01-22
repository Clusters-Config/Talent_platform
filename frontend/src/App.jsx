import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import Layout from './wrappers/Layout';
import Profile from "./pages/Profile";
import Animation from './components/Animation';

const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Findtalent = React.lazy(() => import('./pages/Findtalent'));
const Jobs = React.lazy(() => import('./pages/Jobs'));
const Network = React.lazy(() => import('./pages/Network'));
const Notifications = React.lazy(() => import('./pages/Notifications'));


const App = () => {
  let location = true;
  return (
    <>
      <Router>
        <div>
          {/* Navbar Component */}
         { location.pathname !== '/profile' && <Navbar />}
          
          
          <Layout>
          {/* Routing between pages */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Suspense><Login /></Suspense>} />
            <Route path="/register" element={<Suspense><Register/></Suspense>}/>
            <Route path="/findtalent" element={<Suspense ><Findtalent /></Suspense>} />
            <Route path="/jobs" element={<Suspense ><Jobs /></Suspense>} />
            <Route path="/network" element={<Suspense ><Network /></Suspense>} />
            <Route path="/notifications" element={<Suspense ><Notifications /></Suspense>} />
            <Route path="/profile" element={<Suspense><Profile/></Suspense>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          </Layout>
          
        </div>
      </Router>
    </>
  )
}

export default App;
