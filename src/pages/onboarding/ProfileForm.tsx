import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { useState } from "react";

interface ProfileData {
  name: string;
  lastname: string;
  age: string;
  profileImage: File | null;
  schoolOrCollege: string;
  city: string;
  state: string;
  phone: string;
}

interface Props {
  type: "student" | "institute";
  onSubmit: (data: ProfileData) => void;
}

const fields = [
  {
    name: "name",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    required: true,
  },
  {
    name: "schoolOrCollege",
    label: "School/College Name",
    type: "text",
    required: true,
    dynamicLabel: true,
  },
  {
    name: "city",
    label: "City",
    type: "text",
    required: true,
  },
  {
    name: "state",
    label: "State",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
  },
];

export default function ProfileForm({ type, onSubmit }: Props) {
  const [form, setForm] = useState<ProfileData>({
    profileImage: null,
    name: "",
    lastname: "",
    age: "",
    schoolOrCollege: "",
    city: "",
    state: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleAvatarSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    setForm({ ...form, profileImage: file || null });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <Card className="max-w-md mx-auto mt-12">
      <CardHeader>
        <CardTitle>
          {type === "student" ? "Student Profile" : "Institute Profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Input
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={handleAvatarSelect}
            />
            {form.profileImage && (
              <img
                src={URL.createObjectURL(form.profileImage)}
                alt="Profile Preview"
                className="mt-2 w-16 h-16 rounded-full object-cover"
              />
            )}
          </div>
          {fields.map((field) => (
            <Field key={field.name}>
              <FieldLabel htmlFor={field.name}>
                {field.dynamicLabel
                  ? type === "student"
                    ? "School/College Name"
                    : "Institute Name"
                  : field.label}
              </FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                value={form[field.name as keyof ProfileData] as string}
                onChange={handleChange}
                required={field.required}
                type={field.type}
              />
            </Field>
          ))}
          <Button type="submit" className="mt-4">
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
