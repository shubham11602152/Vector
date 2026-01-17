"use client";

import { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validatePassword } from "./utils";

interface RegisterFormProps {
  onSignUp: (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
  }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSignUp }) => {
  const id = useId();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validatePassword(
      formData.password,
      formData.confirmPassword
    );
    if (errors.length > 0) {
      setFormError(errors[0]); // Show the first error
      return;
    }
    setFormError(null);
    onSignUp(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Username */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="firstName">
          First Name*
        </Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          required
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>

      {/* Last Name */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="lastName">
          Last Name*
        </Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          required
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          Email address*
        </Label>
        <Input
          type="email"
          id="userEmail"
          name="email"
          placeholder="Enter your email address"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-1">
        <Label className="leading-5" htmlFor={id}>
          Phone
        </Label>
        <div className="flex rounded-md shadow-xs">
          <span className="border-input text-muted-foreground -z-1 inline-flex items-center rounded-l-md border px-3 text-sm">
            +91
          </span>
          <Input
            id={id}
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="-ms-px rounded-l-none shadow-none"
            pattern="[0-9]{10}"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Password */}
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          Password*
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
            required
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              setIsPasswordVisible((prevState) => !prevState);
            }}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isPasswordVisible ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="confirmPassword">
          Confirm Password*
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInputChange}
            value={formData.confirmPassword}
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
            required
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              setIsConfirmPasswordVisible((prevState) => !prevState);
            }}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isConfirmPasswordVisible ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
      </div>

      {/* Privacy policy */}
      {/* <div className="flex items-center gap-3">
        <Checkbox
          id="agreeToTerms"
          name="agreeToTerms"
          value={formData.agreeToTerms}
          onChange={handleInputChange}
          className="size-6"
          required
        />
        <Label htmlFor="agreeToTerms">
          <span className="text-muted-foreground">I agree to</span>{" "}
          <a href="#">privacy policy & terms</a>
        </Label>
      </div> */}

      {formError && <div className="text-red-500 text-sm">{formError}</div>}

      <Button className="w-full" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
