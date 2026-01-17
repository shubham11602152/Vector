import "./index.css";
import { useEffect } from "react";
import useAppContext from "@/hooks/useAppContext";
import { supabase } from "./supabase-client";
import AppRoutes from "./app-routes";

export default function App() {
  const { session, setSession, setUser } = useAppContext();

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        const {
          user: {
            id,
            role,
            user_metadata: { email, phone, first_name, last_name },
          },
        } = session;
        setUser({
          id: id,
          firstName: first_name,
          lastName: last_name,
          email: email,
          phone: phone,
          avatarUrl: "https://github.com/shadcn.png",
          role: role,
        });
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AppRoutes session={session} />;
}
