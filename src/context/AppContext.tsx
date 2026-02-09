import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type {
  AppContextProviderProps,
  AppContextType,
} from "@/context/AppContext.types";
import { login as loginSupabase, logout, signUp } from "@/supabase-client";

const AppContext = React.createContext<AppContextType | undefined>(undefined);
const MOCKED_USER = {
  avatarUrl: "https://github.com/shadcn.png",
};
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<AppContextType["user"]>(null);
  const [session, setSession] = React.useState<AppContextType["session"]>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login: AppContextType["login"] = async (formData) => {
    const { data, isLoginSuccessful } = await loginSupabase(formData);

    if (
      isLoginSuccessful &&
      data &&
      typeof data === "object" &&
      "user" in data
    ) {
      const {
        user: {
          id,
          role,
          user_metadata: { email, phone, first_name, last_name },
        },
      } = data as {
        user: {
          id: string;
          role?: string;
          user_metadata: {
            email: string;
            phone?: string;
            first_name?: string;
            last_name?: string;
          };
        };
      };
      setUser({
        id: id,
        firstName: first_name ?? "",
        lastName: last_name ?? "",
        email: email ?? "",
        phone: phone ?? "",
        avatarUrl: MOCKED_USER.avatarUrl,
        role: role,
      });
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
  };

  const handleLogout = async () => {
    await logout();
    setSession(null);
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  const contextValue = {
    session,
    user,
    isAuthenticated,
    setIsAuthenticated,
    login,
    signUp,
    logout: handleLogout,
    setUser,
    setSession,
    navigate,
  };

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user, session, isAuthenticated]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
