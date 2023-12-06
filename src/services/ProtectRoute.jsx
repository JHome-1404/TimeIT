import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = (props) => {
  const { user, redirectTo = "/notaccess" } = props;
  if (!user) return <Navigate to={redirectTo} />;
  return <Outlet />;
};

export { ProtectRoute };
