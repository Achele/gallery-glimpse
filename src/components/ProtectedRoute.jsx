import { Navigate } from "react-router-dom";
import { UseUserAuth } from "../context/authContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = UseUserAuth();

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoutes;
