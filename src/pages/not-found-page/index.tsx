import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-background px-4">
      <Card className="max-w-md w-full shadow-lg border-1 border-primary/10">
        <CardHeader className="flex flex-col items-center gap-2">
          <Avatar className="size-16 mb-2">
            <AvatarImage src="/404-illustration.png" />
            <AvatarFallback>404</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-primary">Page Not Found</h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-center text-lg">
            Sorry, the page you are looking for does not exist.
            <br />
            You may have mistyped the address or the page may have moved.
          </p>
          <Button asChild variant="default" size="lg" className="mt-2">
            <Link to="/">Go to Home Page</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
