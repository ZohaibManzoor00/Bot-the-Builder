import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "../../../public/logo.svg";

interface AppLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function AppLogo({ className, width = 32, height = 32 }: AppLogoProps) {
  return <Image src={Logo} alt="Logo" width={width} height={height} className={cn(className)} />;
}
