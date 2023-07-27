import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const navigate = useNavigate();
  const { profile, logout } = useAuthStore();

  return (
    <div>
      Profile
      <div>{JSON.stringify(profile)}</div>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
