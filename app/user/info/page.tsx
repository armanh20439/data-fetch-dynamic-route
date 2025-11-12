import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Reuse the same header/footer structure or import a Layout component */}
      <h1 className="text-4xl font-bold mb-4">this is user information</h1>
      <p className="text-lg max-w-2xl text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet similique voluptatum expedita amet voluptas dolores tempora, aut dolorum veniam incidunt, eius et assumenda, aspernatur repellat sunt quos alias atque unde.
      </p>
      <li><Link href="/" className="hover:underline">Home</Link></li>
    </div>
  );
}