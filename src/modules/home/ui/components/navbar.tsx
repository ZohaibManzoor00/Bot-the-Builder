"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/ui/app-logo";
import { UserControl } from "@/components/ui/user-control";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

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
        <Link href="/" className="flex items-center gap-2">
          <AppLogo width={24} height={24} />
          <span className="font-semibold text-lg">Bot the Builder</span>
        </Link>
        <SignedOut>
          <div className="flex gap-2">
            <SignUpButton>
              <Button variant="outline" size="sm">
                Sign up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm">Sign in</Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserControl showName />
        </SignedIn>
      </div>
    </nav>
  );
}
