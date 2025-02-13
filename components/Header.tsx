import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#333] text-[#f0ead6] p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Paul Charlton
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
