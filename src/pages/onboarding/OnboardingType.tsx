import { School, User } from "lucide-react";

export type OnboardingType = "student" | "institute";

interface Props {
  onSelect: (type: OnboardingType) => void;
}

export default function OnboardingTypeSelector({ onSelect }: Props) {
  return (
    <div className="space-y-10">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Select Onboarding Type
      </h2>
      <form className="flex flex-row gap-6 justify-center">
        <label className="flex flex-col items-center gap-3 p-4 rounded-lg border border-2 cursor-pointer hover:border-primary transition-all min-w-[220px]">
          <input
            type="radio"
            name="onboardingType"
            value="student"
            className="accent-primary w-5 h-10 hidden"
            onChange={() => onSelect("student")}
          />
          <User className="text-primary" size={72} />
          <span className="text-lg font-medium">User</span>
        </label>
        <label className="flex flex-col items-center gap-3 p-4 rounded-lg border border-2 cursor-pointer hover:border-primary transition-all min-w-[220px]">
          <input
            type="radio"
            name="onboardingType"
            value="institute"
            className="accent-primary w-5 h-5 hidden"
            onChange={() => onSelect("institute")}
          />
          <School className="text-primary" size={72} />
          <span className="text-lg font-medium">Business</span>
        </label>
      </form>
    </div>
  );
}
