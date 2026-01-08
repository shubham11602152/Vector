import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  TypographyH3,
  TypographyLarge,
  TypographyMuted,
} from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserProfileCard({
  firstName,
  lastName,
  occupation,
  email,
  avatarUrl,
}: {
  firstName: string;
  lastName: string;
  occupation: string;
  email: string;
  avatarUrl: string;
}) {
  return (
    <Card className="flex items-center min-w-[200px] p-4 gap-4 flex-col">
      <Avatar className="size-30">
        <AvatarImage src={avatarUrl} alt="avatar" />
        <AvatarFallback>
          {firstName?.[0] ?? ""}
          {lastName?.[0] ?? ""}
        </AvatarFallback>
      </Avatar>
      <TypographyH3>
        {firstName} {lastName}
      </TypographyH3>
      <TypographyMuted>
        <TypographyLarge>{occupation}</TypographyLarge>
      </TypographyMuted>
      <TypographyMuted>{email}</TypographyMuted>
      <Button variant="secondary" size="lg" className="group w-full mt-auto">
        Request
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button>
    </Card>
  );
}

export const ProfileCardSkeleton = () => {
  return (
    <Card className="flex items-center p-4 max-w-sm gap-4 flex-col">
      <Skeleton className="size-30 rounded-full" />
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-3 w-40" />
      <Skeleton className="h-10 w-full" />
    </Card>
  );
};
