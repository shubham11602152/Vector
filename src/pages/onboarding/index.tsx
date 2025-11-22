import { useState } from "react";
import OnboardingTypeSelector from "./OnboardingType";
import type { OnboardingType } from "./OnboardingType";
import ProfileForm from "./ProfileForm";
import EducationForm from "./EducationForm";
import VerticalLayout from "@/components/layouts/vertical-layout";

export default function OnboardingFlow() {
  const [step, setStep] = useState<"type" | "profile" | "education">("type");
  const [type, setType] = useState<OnboardingType | null>(null);
  const [, setProfileData] = useState<object | null>(null);

  function handleTypeSelect(selected: OnboardingType) {
    setType(selected);
    setStep("profile");
  }

  function handleProfileSubmit(data: object) {
    setProfileData(data);
    setStep("education");
  }

  function handleEducationSubmit(data: object) {
    // TODO: Finalize onboarding or navigate further
    alert("Education submitted!" + JSON.stringify(data));
  }

  return (
    <VerticalLayout hideHeader hideFooter>
      <div className="min-h-screen flex items-center justify-center">
        {step === "type" && (
          <OnboardingTypeSelector onSelect={handleTypeSelect} />
        )}
        {step === "profile" && type && (
          <ProfileForm type={type} onSubmit={handleProfileSubmit} />
        )}
        {step === "education" && (
          <EducationForm onSubmit={handleEducationSubmit} />
        )}
      </div>
    </VerticalLayout>
  );
}
