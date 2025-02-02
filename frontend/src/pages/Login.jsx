import React from 'react';
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import Formback from "../components/Formback";

const Login = () => {
  return (
      <Formback>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <FormLogin children={<FormRegister />} />
      </div>
      </Formback>
  );
};

export default Login;