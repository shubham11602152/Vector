// ...existing code...
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="font-bold text-xl tracking-tight select-none">
          <Link to="/">Vector</Link>
        </div>
        {/* CTAs */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="default" size="sm" className="hidden md:inline-flex">
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
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
