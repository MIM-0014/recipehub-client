"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import useAuth from "@/hooks/useAuth";
import { saveUser } from "@/services/userApi";
import { auth } from "@/lib/firebase.config";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const { createUser, updateUserProfile, googleLogin } = useAuth();

  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    try {
      const result = await createUser(email, password);

await updateUserProfile(name, photo);

// Refresh the current user so displayName/photoURL are updated
await result.user.reload();

const updatedUser = auth.currentUser;

const token = await updatedUser.getIdToken();

console.log("Firebase Token:", token);

await saveUser({
  name: updatedUser.displayName,
  email: updatedUser.email,
  image: updatedUser.photoURL,
});
toast.success("Registration Successful!");

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
      image: result.user.photoURL,
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
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Join RecipeHub today
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Photo URL
            </label>

            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

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
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
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
            Register
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-orange-500 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}