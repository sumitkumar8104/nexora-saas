import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2"
      aria-label="Nexora"
    >
      <Image src={logo} alt="Nexora Logo" width={32} height={32} />
      <span className="text-lg font-semibold text-gray-200">Nexora</span>
    </Link>
  );
}
