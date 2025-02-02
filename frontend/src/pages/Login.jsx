import React from 'react';
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import Formback from "../components/Formback";

const Login = () => {
  return (
    
      <div style={{ position: 'relative', zIndex: 1000 }}>
        <FormLogin children={<FormRegister />} />
      </div>
    
  );
};

export default Login;