import React, { useState, useRef } from "react";
import useAppContext from "@/hooks/useAppContext";
import type { User } from "@/context/AppContext.types";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/FieldLabel";
import { Field } from "@/components/ui/field";
import { Edit } from "lucide-react";

const ProfilePage: React.FC = () => {
  const { user, setUser } = useAppContext();
  const [profile, setProfile] = useState<User | null>(user);
  const [editing, setEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!profile) return;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile({
          ...profile,
          avatarUrl: event.target?.result as string,
        } as User);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!profile) return;
    setProfile({ ...profile, [e.target.name]: e.target.value } as User);
  };

  const handleEdit = () => setEditing(true);
  const handleUpdate = () => {
    setEditing(false);
    // Here you would typically send updated data to your backend
    setUser(profile);
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto bg-card rounded-xl p-8 shadow-md flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="relative size-30 mb-2">
            <Avatar className="size-30">
              {editing && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full group hover:bg-black/60 transition"
                  style={{ pointerEvents: "auto" }}
                  aria-label="Edit Avatar"
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  <Edit />
                </button>
              )}
              <AvatarImage src={profile?.avatarUrl} alt="avatar" />
              <AvatarFallback>
                {profile?.firstName?.[0] ?? ""}
                {profile?.lastName?.[0] ?? ""}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <Field>
            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
            <Input
              id="firstName"
              name="firstName"
              value={profile?.firstName}
              onChange={handleChange}
              disabled={!editing}
              placeholder="First Name"
              className="w-full"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
            <Input
              id="lastName"
              name="lastName"
              value={profile?.lastName}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Last Name"
              className="w-full"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              value={profile?.email}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Email"
              className="w-full"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
            <Input
              id="phone"
              name="phone"
              value={profile?.phone}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Phone Number"
              className="w-full"
            />
          </Field>
        </div>
        {!editing ? (
          <Button variant="default" className="w-full" onClick={handleEdit}>
            Edit Profile
          </Button>
        ) : (
          <Button variant="default" className="w-full" onClick={handleUpdate}>
            Update Profile
          </Button>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
