import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          VPS Test
        </h1>
        <Link
          href="/test"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:opacity-80 transition-opacity"
        >
          Go to Test Page
        </Link>
      </div>
    </div>
  );
}
