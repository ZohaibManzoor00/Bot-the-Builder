import { useState, useEffect } from "react";
import { BotWorkingAnimation } from "@/components/ui/bot-wave-animation";

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
    "Bot's got his hard hat on... (and his game face).",
    "Just calibrating the... uh... 'focus' settings.",
    "Warming up the circuits... (for optimal button mashing).",
    "Analyzing your request... (between levels).",
    "Prepping the pixel palette... (for high scores).",

    "Laying down the foundational code... (totally not a high score).",
    "Wrangling unruly CSS... (it's like a boss battle!).",
    "Crafting components... (while dodging digital projectiles).",
    "Optimizing for lightning speed... (my reflexes are amazing!).",
    "Assembling the interactive widgets... (gotta catch 'em all!).",

    "Adding the sparkle and shine... (almost done with this side quest!).",
    "Polishing every pixel... (just one more turn...).",
    "Ensuring cross-browser harmony... (multiplayer mode is intense).",
    "Just calibrating the creativity circuits... (don't tell the boss!).",
    "Almost ready for its grand reveal! (Phew, just made it!).",
    "Website construction complete! (Now, where was I?).",
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
      <BotWorkingAnimation />
      <ShimmerMessages />
    </div>
  );
};
