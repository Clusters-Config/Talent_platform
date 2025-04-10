import React, { useState, useEffect } from 'react';
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import Formback from "../components/Formback";
import Loading from '../components/Loading';

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
   <>
   <div className="absolute inset-0 z-40 ">
      <Formback/>
      <FormLogin children={<FormRegister />} />
    </div>
      </>
  );
};

export default Login;
