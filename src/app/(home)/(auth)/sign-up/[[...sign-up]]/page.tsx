"use client";

import { SignUp } from "@clerk/nextjs";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  const theme = useCurrentTheme();

  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="space-y-6 pt-[16vh] 2xl:pt-48">
        <div className="flex flex-col items-center relative">
          <SignUp
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                cardBox: "rounded-lg! border! shadow-none!",
              },
            }}

          />
          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] z-20 dark:bg-[#1f1f24] rounded-lg" /> */}
        </div>
      </section>
    </div>
  );
}
