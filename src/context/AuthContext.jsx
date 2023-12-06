import { useState, useEffect, createContext } from "react";
import { Auth } from "../data/Auth";

const authController = new Auth();
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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

  const login = (data) => {
    setUser({ ...data });
    authController.setAccessKey({ ...data });
  };

  const logout = () => {
    setUser(null);
    authController.removeAccessKey("key");
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
