import { useState, useEffect, createContext } from "react";
import { Auth, User } from "../data";

const authController = new Auth();
const userController = new User();
const GeneralContext = createContext();

function GeneralProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let keyAccess = authController.getAccessKey();
      if (!keyAccess) {
        logout();
        setLoading(false);
        return;
      }
      keyAccess = JSON.parse(keyAccess);
      setUser(keyAccess);
      setLoading(false);
    })();
  }, []);

  // ? Auth
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser({ ...data });
    authController.setAccessKey({ ...data });
  };

  const logout = () => {
    setUser(null);
    userController.removeAccessKey("key");
  };

  // ? User
  const updateUser = (data) => {
    setUser({ ...data });
    authController.setAccessKey({ ...data });
  };

  const deleteUser = () => {
    setUser(null);
    userController.removeAccessKey("key");
  };

  const dataAuth = {
    user,
    login,
    logout,
    updateUser,
    deleteUser,
  };

  if (loading) return null;

  return (
    <GeneralContext.Provider value={{ dataAuth }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { GeneralContext, GeneralProvider };
