import React from "react";
import VerticalLayout from "@/components/layouts/vertical-layout";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <VerticalLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-balance max-w-2xl text-center">
          Login to Your Account
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl text-center">
          Access your dashboard and manage your projects by logging in below.
        </p>
        <LoginForm className="w-full max-w-3xl" />
      </div>
    </VerticalLayout>
  );
}
