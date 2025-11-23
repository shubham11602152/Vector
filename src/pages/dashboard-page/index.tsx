import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import DashboardLayout from "@/components/layouts/dashboard-layout";

const widgets = [
  {
    title: "Profile",
    content: (
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">John Doe</div>
          <div className="text-sm text-muted-foreground">john@example.com</div>
        </div>
        <Button variant="outline" size="sm" className="ml-auto">
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

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
};

export default DashboardPage;
