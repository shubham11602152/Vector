// Define your context properties and their types here

type UserType = "student" | "institute" | "admin" | string;

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  role?: UserType;
};

type Credentials = {
  email: string;
  password: string;
};

type AppContextType = {
  user: User | null;
  session: unknown;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
  setSession: (session: unknown) => void;
  navigate: (path: string) => void;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export type { UserType, User, AppContextType, AppContextProviderProps };
