"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Compass,
  Bell,
  MessageCircle,
  Menu,
  User,
  Settings,
  Bookmark,
  LifeBuoy,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logOutUser } from "@/service/logOutUser";
import { toast } from "sonner";

// Keep nav items organized in an array for easy maintenance
const navItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Explore", href: "/explore", icon: Compass },
  { title: "Notifications", href: "/notifications", icon: Bell },
  { title: "Messages", href: "/messages", icon: MessageCircle },
];

// User dropdown options organized in an array as well
const userMenuItems = [
  { title: "Profile", href: "/profile", icon: User },
  { title: "Saved", href: "/saved", icon: Bookmark },
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Support", href: "/support", icon: LifeBuoy },
];

type IUser = {
  success: boolean;
  message: string;
  data: {
    profile: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

type NavbarProps = {
  user: IUser;
};

export function Navbar(user: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Home className="size-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Pulse
            </span>
          </Link>

          {/* Desktop nav items */}
          <ul className="hidden items-center gap-1 md:flex ">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <item.icon className="size-4" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: user dropdown + mobile toggle */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            {user.user.success ? (
              <div>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-9 gap-2 px-1.5 sm:pl-1.5 sm:pr-3 cursor-pointer"
                  >
                    <Avatar className="size-7">
                      <AvatarFallback>
                        <p>A</p>
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden text-sm font-medium sm:inline">
                      {user ? user?.user.data.profile.name : ""}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {user ? user?.user.data.profile.name : ""}
                        </span>
                        <span className="text-xs font-normal text-muted-foreground">
                          {user ? user?.user.data.profile.email : ""}
                        </span>
                      </div>
                    </DropdownMenuLabel>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {userMenuItems.map((item) => (
                      <DropdownMenuItem key={item.title} asChild>
                        <Link href={item.href} className="cursor-pointer">
                          <item.icon className="size-4" />
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <LogOut className="size-4" />
                    <Button
                      onClick={async () => {
                        const result = await logOutUser();
                        if (result) {
                          toast.success("Logout successful");
                        }
                      }}
                    >
                      Log out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground hover:text-accent-foreground"
              >
                Login
              </Link>
            )}
          </DropdownMenu>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile nav items */}
      <div
        className={cn(
          "border-t border-border md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <ul className="space-y-1 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <item.icon className="size-4" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
