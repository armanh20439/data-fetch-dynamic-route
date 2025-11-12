import Image from 'next/image';
import pofile from '../asset/profile.png'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-orange-600 text-white py-4">
        <nav className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Bologs</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/user/info" className="hover:underline">User Information</a></li>
            <li><a href="/blog" className="hover:underline">User Blogs</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Site!</h2>
        <p className="text-lg mb-8">This is a simple Next.js site.</p>
        <Image
          src={pofile}
          alt="Placeholder"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
        <p className='text-center py-4 max-w-2/3 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur vel culpa eligendi ut nulla tempore similique, exercitationem mollitia quaerat, minima fugiat explicabo. Debitis iusto error alias? Praesentium, mollitia assumenda.
        </p>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        © 2025 web
      </footer>
    </div>
  );
}