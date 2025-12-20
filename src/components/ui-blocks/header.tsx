// ...existing code...
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import useAppContext from "@/context/useAppContext";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const handleClickGetStarted = () => {
    navigate("/onboarding");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/20 backdrop-blur border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="font-bold text-xl tracking-tight select-none">
          <Link to="/">Vector</Link>
        </div>
        {/* CTAs */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex"
            onClick={handleClickGetStarted}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/login")}
          >
            Login / Signup
          </Button>
          <Avatar>
            <AvatarImage src={user?.avatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
