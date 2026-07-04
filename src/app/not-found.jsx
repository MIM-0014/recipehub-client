import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-orange-500">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-5">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 max-w-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="btn btn-warning mt-8"
        >
          Back Home
        </Link>

      </div>

    </div>
  );
}