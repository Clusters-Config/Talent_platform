import React from 'react';
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import Formback from "../components/Formback";

const Login = () => {

  return (
   <>
      <Formback />
      <FormLogin children={<FormRegister />} />
      </>
  );
};

export default Login;