import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="my-4">Page Not Found</p>

      <Link
        href="/"
        className="px-4 py-2 bg-orange-500 text-white rounded"
      >
        Back Home
      </Link>
    </div>
  );
}
