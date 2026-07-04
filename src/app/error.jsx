"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-red-500">
          Something went wrong
        </h1>

        <p className="mt-5 text-gray-500">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="btn btn-error mt-8"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}