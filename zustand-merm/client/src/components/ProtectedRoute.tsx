import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  isAllowed: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAllowed,
}) => {
  if (!isAllowed) {
    return (
      <Navigate
        to="/login"
        replace={true}
      />
    );
  }
  return <>{children ?? <Outlet />}</>;
};

export default ProtectedRoute;
