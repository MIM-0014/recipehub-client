"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import useAuth from "@/hooks/useAuth";
import { saveUser } from "@/services/userApi";
import toast from "react-hot-toast"; 

export default function LoginPage() {
  const router = useRouter();

  const { login, googleLogin } = useAuth();

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await login(email, password);

     const token = await result.user.getIdToken();

console.log("Firebase Token:", token);

await saveUser({
  name: result.user.displayName,
  email: result.user.email,
  photo: result.user.photoURL,
});

toast.success("Login Successful!");
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();

      const token = await result.user.getIdToken();

console.log("Firebase Token:", token);

await saveUser({
  name: result.user.displayName,
  email: result.user.email,
  photo: result.user.photoURL,
});

toast.success("Google Login Successful!");

      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your RecipeHub account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="Enter email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              placeholder="Enter password"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border"></div>

          <span className="mx-3 text-gray-400">
            OR
          </span>

          <div className="flex-1 border"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-orange-500 font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}