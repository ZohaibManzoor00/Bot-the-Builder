"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";

import { NavbarLogo } from "./navbar-logo";
import { UserControl } from "@/components/ui/user-control";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { ThemeToggler } from "@/components/ui/theme-toggle";

export function Navbar() {
  const { isScrolled } = useScroll();
  const { isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <nav
      className={cn(
        "p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent",
        isScrolled && "bg-background/80 backdrop-blur-sm border-border"
      )}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <NavbarLogo width={24} height={24} />
        <div className="flex gap-x-4 items-center">
          <div className="hidden md:block">
            <ThemeToggler />
          </div>

        <SignedOut>
          <div className="flex gap-x-6">
            <SignUpButton />
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserControl showName />
        </SignedIn>
        </div>
      </div>
    </nav>
  );
}
