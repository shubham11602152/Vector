import VerticalLayout from "@/components/layouts/vertical-layout";
import RegisterForm from "@/components/register-form";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <VerticalLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12">
        <div className="absolute">{/* <AuthBackgroundShape /> */}</div>

        <h1 className="text-4xl font-extrabold tracking-tight text-balance max-w-2xl text-center">
          Register for an Account
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl text-center">
          Access your dashboard and manage your portfolio by registering below.
        </p>
        <Card className="z-1 w-full p-0 overflow-hidden max-w-3xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="bg-muted relative hidden md:block">
              <img
                src="/placeholder.svg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
            {/* Register Form */}
            <div className="p-6 md:p-8">
              <RegisterForm />

              <p className="text-muted-foreground text-center text-sm mt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-card-foreground underline underline-offset-4"
                >
                  Sign in instead
                </Link>
              </p>

              {/* Uncomment when integrating OAuth */}
              {/* <div className="flex items-center gap-4">
                <Separator className="flex-1" />
                <p>or</p>
                <Separator className="flex-1" />
              </div>

              <Button variant="ghost" className="w-full" asChild>
                <a href="#">Sign in with google</a>
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </VerticalLayout>
  );
};

export default RegisterPage;
