import React from "react";
import RegisterBackground from "../components/RegisterBackground";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <section className='register'>
      <div className='register_center'>
        <RegisterBackground />
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
