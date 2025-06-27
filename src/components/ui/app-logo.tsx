import Image from "next/image";
import Logo from "../../../public/logo.svg";

export function AppLogo() {
  return <Image src={Logo} alt="Logo" width={32} height={32} />;
}
