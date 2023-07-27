import React from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest, meRequest } from "../api/auth";
import useAuthStore from "../store/auth";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  const { setToken, setProfile } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const respLogin = await loginRequest(email, password);
    setToken(respLogin.token);
    const respMe = await meRequest(respLogin.token);
    setProfile(respMe);
    navigate("/me");

    //console.log(respLogin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email@mail.com"
      />
      <input
        type="password"
        placeholder="password"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
