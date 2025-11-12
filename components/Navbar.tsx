import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="max-w-4xl mx-auto flex justify-between py-4">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
      </ul>
    </nav>
  );
}