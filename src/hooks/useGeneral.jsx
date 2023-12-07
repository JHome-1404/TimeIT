import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

const useAuth = () => {
  const { dataAuth } = useContext(GeneralContext);
  const { user, login, logout, updateUser, deleteUser } = dataAuth;

  return { user, login, logout, updateUser, deleteUser };
};

export { useAuth };
