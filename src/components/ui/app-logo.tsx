import Image from "next/image";
import Logo from "../../../public/logo.svg";
import React, { useRef } from "react";

interface AppLogoProps {
  className?: string;
  width?: number;
  height?: number;
  spin?: boolean; // If true, always spins
  quickSpin?: boolean; // If true, spins on hover
  text?: string; // Optional text next to logo
}

export function AppLogo({
  className,
  width = 32,
  height = 32,
  spin = false,
  quickSpin = false,
  text,
}: AppLogoProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  // Handler for quickSpin animation
  const handleQuickSpin = () => {
    if (imgRef.current) {
      imgRef.current.classList.add("app-logo-quick-spin");
      const handleAnimationEnd = () => {
        imgRef.current?.classList.remove("app-logo-quick-spin");
        imgRef.current?.removeEventListener("animationend", handleAnimationEnd);
      };
      imgRef.current.addEventListener("animationend", handleAnimationEnd);
    }
  };

  // If spin is true, always spin
  const spinClass = spin ? "app-logo-spin" : "";

  // If quickSpin is true, set up hover/enter/leave on wrapper
  const wrapperProps =
    quickSpin || text
      ? {
          onMouseEnter: handleQuickSpin,
          onFocus: handleQuickSpin,
          tabIndex: 0, // for accessibility
          style: { display: "inline-flex", alignItems: "center", cursor: "pointer" },
        }
      : {};

  return (
    <>
      <style jsx global>{`
        .app-logo-spin {
          animation: app-logo-spin 1.2s linear infinite;
        }
        .app-logo-quick-spin {
          animation: app-logo-spin 0.7s cubic-bezier(0.4, 0, 0.2, 1) 1;
        }
        @keyframes app-logo-spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <span {...wrapperProps} className={className}>
        <Image
          ref={imgRef}
          src={Logo}
          alt="Logo"
          width={width}
          height={height}
          draggable={false}
          className={spinClass}
          style={{ display: "inline-block" }}
        />
        {text && (
          <span className="ml-2 select-none">{text}</span>
        )}
      </span>
    </>
  );
}
