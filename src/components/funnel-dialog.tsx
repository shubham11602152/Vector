import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FunnelDialogProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    occupation: string;
    city: string;
    state: string;
  }) => void;
}

const occupations = ["Student", "Professional", "Business"];
const states = [
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Delhi",
  "West Bengal",
  "Uttar Pradesh",
  "Gujarat",
  "Rajasthan",
  "Punjab",
  "Kerala",
];
const citiesByState: Record<string, string[]> = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belgaum"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
  ],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Agra", "Varanasi"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Alappuzha"],
};

const FunnelDialog: React.FC<FunnelDialogProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: occupations[0],
    state: states[0],
    city: citiesByState[states[0]][0],
  });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle>Tell us about yourself</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex gap-4">
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-1/2"
              />
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-1/2"
              />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-4"
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full mt-4"
            />
            <Select
              value={form.occupation}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, occupation: value }))
              }
              required
            >
              <SelectTrigger className="w-full mt-4">
                <SelectValue placeholder="Select occupation" />
              </SelectTrigger>
              <SelectContent>
                {occupations.map((occ) => (
                  <SelectItem key={occ} value={occ}>
                    {occ}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={form.state}
              onValueChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  state: value,
                  city: citiesByState[value][0],
                }))
              }
              required
            >
              <SelectTrigger className="w-full mt-4">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={form.city}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, city: value }))
              }
              required
            >
              <SelectTrigger className="w-full mt-4">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {citiesByState[form.state].map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FunnelDialog;
