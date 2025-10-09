import { useState, useEffect } from "react";
import { AppLogo } from "@/components/ui/app-logo";

const ShimmerMessages = () => {
  // const messages = [
  //   "Thinking...",
  //   "Loading...",
  //   "Generating...",
  //   "Analyzing your request...",
  //   "Building your website...",
  //   "Crafting components...",
  //   "Optimizing layout...",
  //   "Adding final touches...",
  //   "Almost ready...",
  // ];
  const messages = [
    "Nester is on it...",
    "Putting everything in place...",
    "Making sure it all fits together...",
    "Fine-tuning the details...",
    "Setting things up just right...",
    "Almost there...",
  ];

  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIdx((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground animate-plus">
        {messages[currentMessageIdx]}
      </span>
    </div>
  );
};

export const MessageLoading = () => {
  return (
    <div className="flex group px-2 items-center gap-1 pb-4">
      <AppLogo spin />
      {/* <BotWorkingAnimation /> */}
      <ShimmerMessages />
    </div>
  );
};
