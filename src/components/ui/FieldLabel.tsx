import * as React from "react";
import { Label } from "@/components/ui/label";

interface FieldLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export function FieldLabel({ htmlFor, children, className }: FieldLabelProps) {
  return (
    <Label htmlFor={htmlFor} className={className}>
      {children}
    </Label>
  );
}
