import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import useAppContext from "@/hooks/useAppContext";
import { TypographyP } from "@/components/ui/typography";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const widgets = [
    {
      title: "Profile",
      content: (
        <div className="flex items-center gap-4 flex-wrap">
          <Avatar className="size-[20%] md:size-30 max-size-30">
            <AvatarImage src={user?.avatarUrl} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold capitalize">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="text-sm text-muted-foreground">{user?.email}</div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto"
            onClick={() => navigate("/profile")}
          >
            Edit
          </Button>
        </div>
      ),
    },
    {
      title: "Quick Actions",
      content: (
        <div className="flex gap-2">
          <Button variant="default">Create Report</Button>
          <Button variant="outline">Invite User</Button>
        </div>
      ),
    },
    {
      title: "Statistics",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>1,245</CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>$12,400</CardContent>
          </Card>
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle>Growth</CardTitle>
            </CardHeader>
            <CardContent>+18%</CardContent>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="my-12">
        <h2 className="text-5xl  capitalize font-extrabold text-balance">
          Welcome! {user?.firstName} 🌼
        </h2>
        <TypographyP>Access your career dashboard</TypographyP>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {widgets.map((widget, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{widget.title}</CardTitle>
            </CardHeader>
            <CardContent>{widget.content}</CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
