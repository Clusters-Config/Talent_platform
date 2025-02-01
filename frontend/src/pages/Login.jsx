import React from 'react';
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import Formback from "../components/Formback";

const Login = () => {
  return (
    <Formback>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <FormLogin children={<FormRegister />} />
      </div>
    </Formback>
  );
};

export default Login;