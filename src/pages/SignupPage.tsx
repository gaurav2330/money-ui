import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const authToken:any = localStorage.getItem("auth_token");
  const checkTokenValidity = async () => {
    const response = await fetch(`http://localhost:3939/validateToken`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': authToken
      }
    });

    if (response.ok) {
      navigate("/home");
    }
  }

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <div className="signup-page container-fluid vh-100 vw-100">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
