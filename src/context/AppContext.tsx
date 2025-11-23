import React from "react";
import { useNavigate } from "react-router-dom";
import type {
  AppContextProviderProps,
  AppContextType,
} from "@/context/AppContext.types";

const AppContext = React.createContext<AppContextType | undefined>(undefined);
const MOCKED_USER = {
  id: "1",
  name: "Shubham Mehta",
  email: "shubham.mehta@gmail.com",
  avatarUrl: "https://github.com/shadcn.png",
};
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<AppContextType["user"]>(MOCKED_USER);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login: AppContextType["login"] = (user) => {
    setUser({
      id: "1",
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
      userType: user.userType,
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const contextValue = {
    user,
    isAuthenticated,
    login,
    logout,
    setUser,
    navigate,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
