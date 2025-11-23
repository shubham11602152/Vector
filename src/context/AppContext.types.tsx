// Define your context properties and their types here
type AppContextType = {
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  } | null;
  isAuthenticated: boolean;
  login: (name: string, email: string, avatarUrl: string) => void;
  logout: () => void;
  setUser: (user: AppContextType["user"]) => void;
  navigate: (path: string) => void;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export type { AppContextType, AppContextProviderProps };
