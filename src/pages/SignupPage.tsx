import React from "react";
import SignupForm from "../components/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border shadow">
      <h1 className="text-xl font-bold mb-4">Signup</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
