import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "../../../../../public/logo.svg";

interface NavbarLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

import { useRef } from "react";
import Link from "next/link";

export function NavbarLogo({ className, width = 32, height = 32 }: NavbarLogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const el = logoRef.current;
    if (el) {
      el.classList.remove("kick-spin");
      // Force reflow to restart animation
      void el.offsetWidth;
      el.classList.add("kick-spin");
    }
  };

  const handleAnimationEnd = () => {
    const el = logoRef.current;
    if (el) {
      el.classList.remove("kick-spin");
    }
  };

  return (
    <Link href="/" className="flex items-center gap-2">
      <span
        className={cn("flex items-center gap-2", className)}
        onMouseEnter={handleMouseEnter}
      >
        <style jsx>{`
          @keyframes kick-spin {
            0% {
              transform: rotate(0deg);
            }
            80% {
              transform: rotate(380deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .kick-spin {
            animation: kick-spin 0.38s cubic-bezier(0.4, 0.2, 0.2, 1);
          }
        `}</style>
        <div
          ref={logoRef}
          className="inline-block"
          onAnimationEnd={handleAnimationEnd}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={width}
            height={height}
            draggable={false}
            className="mt-0.5"
          />
        </div>
        <span className="text-2xl font-bold">Nest</span>
      </span>
    </Link>
  );
}
