import React, { useState, useMemo, Suspense } from "react";

import { useId } from "react";

import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ProfileCardSkeleton } from "./components/ProfileCard.tsx";
import PaginationFixed from "./components/Pagination.tsx";

// Lazy load UserProfileCard (fix: use dynamic import for React.lazy)
const UserProfileCard = React.lazy(
  () =>
    import(
      /* webpackChunkName: "UserProfileCard" */ "./components/ProfileCard.tsx"
    )
);

const InputSearchWithIcon = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  const id = useId();

  return (
    <div className="w-full max-w-xs space-y-2 my-4">
      <Label htmlFor={id}>Search user</Label>
      <div className="relative">
        <Input
          id={id}
          type="search"
          placeholder="Search user"
          className="pr-9"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          tabIndex={-1}
        >
          <SearchIcon />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  );
};

const USERS_PER_PAGE = 8;

const SneakPeers = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return UserList.filter(
      (u) =>
        u.firstName.toLowerCase().includes(search.toLowerCase()) ||
        u.lastName.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const pageCount = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  // Reset to page 1 if search changes
  React.useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <>
      <InputSearchWithIcon value={search} onChange={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((user) => (
            <Suspense fallback={<ProfileCardSkeleton />} key={user.email}>
              <UserProfileCard {...user} />
            </Suspense>
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground py-8">
            No users found.
          </div>
        )}
      </div>
      {pageCount > 1 && (
        <PaginationFixed
          page={page}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      )}
    </>
  );
};

export default SneakPeers;

const UserList = [
  {
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    occupation: "Software Engineer",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    occupation: "Product Manager",
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    email: "carol.williams@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    occupation: "UX Designer",
  },
  {
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    occupation: "QA Analyst",
  },
  {
    firstName: "Eva",
    lastName: "Davis",
    email: "eva.davis@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    occupation: "Frontend Developer",
  },
  {
    firstName: "Frank",
    lastName: "Miller",
    email: "frank.miller@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    occupation: "Backend Developer",
  },
  {
    firstName: "Grace",
    lastName: "Wilson",
    email: "grace.wilson@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    occupation: "DevOps Engineer",
  },
  {
    firstName: "Henry",
    lastName: "Moore",
    email: "henry.moore@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    occupation: "Data Scientist",
  },
  {
    firstName: "Ivy",
    lastName: "Taylor",
    email: "ivy.taylor@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    occupation: "Mobile Developer",
  },
  {
    firstName: "Jack",
    lastName: "Anderson",
    email: "jack.anderson@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    occupation: "Cloud Architect",
  },
  {
    firstName: "Kate",
    lastName: "Thomas",
    email: "kate.thomas@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/11.jpg",
    occupation: "Business Analyst",
  },
  {
    firstName: "Leo",
    lastName: "Jackson",
    email: "leo.jackson@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    occupation: "Security Specialist",
  },
  {
    firstName: "Mia",
    lastName: "White",
    email: "mia.white@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    occupation: "Scrum Master",
  },
  {
    firstName: "Noah",
    lastName: "Harris",
    email: "noah.harris@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg",
    occupation: "Full Stack Developer",
  },
  {
    firstName: "Olivia",
    lastName: "Martin",
    email: "olivia.martin@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/15.jpg",
    occupation: "Technical Writer",
  },
  {
    firstName: "Paul",
    lastName: "Thompson",
    email: "paul.thompson@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/16.jpg",
    occupation: "System Administrator",
  },
  {
    firstName: "Quinn",
    lastName: "Garcia",
    email: "quinn.garcia@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg",
    occupation: "AI Engineer",
  },
  {
    firstName: "Ryan",
    lastName: "Martinez",
    email: "ryan.martinez@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/18.jpg",
    occupation: "Database Administrator",
  },
  {
    firstName: "Sophie",
    lastName: "Robinson",
    email: "sophie.robinson@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/19.jpg",
    occupation: "Project Manager",
  },
  {
    firstName: "Tom",
    lastName: "Clark",
    email: "tom.clark@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    occupation: "Network Engineer",
  },
];
