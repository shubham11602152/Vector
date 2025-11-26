// Define your context properties and their types here

type UserType = "student" | "institute" | "admin";

type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  userType?: UserType;
};

type AppContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
  navigate: (path: string) => void;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export type { UserType, AppContextType, AppContextProviderProps };
