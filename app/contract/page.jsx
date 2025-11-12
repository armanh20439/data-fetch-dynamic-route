import Link from 'next/link';

export default function Contract() {
  return (
    <main style={{padding:20}}>
      <h1>About</h1>
      <p>This is the Contract page.</p>
      <Link href="/">Home →</Link>
    </main>
  );
}
