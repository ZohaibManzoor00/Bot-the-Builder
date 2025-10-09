"use client";

import { useUser } from "@clerk/nextjs";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Highlighter } from "@/components/ui/highlighter";
import React from "react";

export const HeroText = () => {
  const { user, isSignedIn } = useUser();
  if (isSignedIn) {
    return (
      <span className="text-center flex gap-x-2 text-5xl">
        Welcome back,
        <SparklesText sparklesCount={5} className="font-semibold">
          {user?.firstName}!
        </SparklesText>
      </span>
    );
  }
  return (
    <span className="text-center text-5xl">
      Build{" "}
      <Highlighter action="underline" color="#C4B5FD" className="font-semibold">
        your app
      </Highlighter>{" "}
      with
      <Highlighter
        action="highlight"
        color="#93C5FD"
        className="ml-5 font-bold"
      >
        <SparklesText className="" sparklesCount={5}>
          AI
        </SparklesText>
      </Highlighter>
    </span>
  );
};
