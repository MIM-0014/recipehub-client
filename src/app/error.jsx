"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>

      <p className="mb-6 text-gray-500">{error?.message}</p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-orange-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}