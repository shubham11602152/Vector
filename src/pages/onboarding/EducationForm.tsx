import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const degreeOptions = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate (PhD)",
  "Professional Degree",
  "Diploma",
  "Certificate",
  "Other",
];

const majorFields = [
  "Engineering",
  "Business",
  "Arts",
  "Science",
  "Medicine",
  "Law",
  "Education",
  "Computer Science",
  "Social Sciences",
  "Humanities",
  "Mathematics",
  "Architecture",
  "Agriculture",
  "Design",
  "Finance",
  "Languages",
  "Physical Education",
  "Other",
];

interface EducationData {
  degree: string;
  major: string;
  institution: string;
  year: string;
}

interface Props {
  onSubmit: (data: EducationData) => void;
}

export default function EducationForm({ onSubmit }: Props) {
  const [form, setForm] = useState<EducationData>({
    degree: "",
    major: "",
    institution: "",
    year: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleDegreeSelect(degree: string) {
    setForm({ ...form, degree });
  }

  function handleMajorSelect(major: string) {
    setForm({ ...form, major });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <Card className="max-w-md mx-auto mt-12">
      <CardHeader>
        <CardTitle>Education & Qualification</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label>Degree</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" type="button">
                  {form.degree || "Select Degree"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {degreeOptions.map((deg) => (
                  <DropdownMenuItem
                    key={deg}
                    onSelect={() => handleDegreeSelect(deg)}
                  >
                    {deg}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Label>Major Field of Study</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" type="button">
                  {form.major || "Select Major"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {majorFields.map((maj) => (
                  <DropdownMenuItem
                    key={maj}
                    onSelect={() => handleMajorSelect(maj)}
                  >
                    {maj}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Label htmlFor="institution">Institution Name</Label>
            <Input
              id="institution"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="year">Year of Graduation</Label>
            <Input
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              type="number"
            />
          </div>
          <Button type="submit" className="mt-4">
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
