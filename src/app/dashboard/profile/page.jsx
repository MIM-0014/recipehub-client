"use client";

import { useState } from "react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const {
    user,
    currentUser,
    updateUserProfile,
    refreshCurrentUser,
  } = useAuth();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Update Firebase
      await updateUserProfile(name, photo);

      // Update MongoDB
      await fetch("http://localhost:5000/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          email: user.email,
          image: photo,
        }),
      });

      if (refreshCurrentUser) {
        await refreshCurrentUser();
      }

      toast.success("Profile Updated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex flex-col items-center">

          <Image
            src={
              photo ||
              "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            alt="Profile"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-5">
            {user?.displayName}
          </h2>

          <p className="text-gray-500">
            {user?.email}
          </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">

  {/* Role */}
  {currentUser?.role === "admin" ? (
    <span className="badge badge-error badge-lg">
      👑 Admin
    </span>
  ) : (
    <span className="badge badge-info badge-lg">
      👤 User
    </span>
  )}

  {/* Subscription */}
  {currentUser?.isPremium ? (
    <span className="badge badge-success badge-lg">
      ⭐ Premium Member
    </span>
  ) : (
    <span className="badge badge-outline badge-lg">
      ⭐ Free User
    </span>
  )}

</div>
        </div>

        <form
          onSubmit={handleUpdate}
          className="mt-10 space-y-5"
        >

          <div>

            <label className="font-semibold">
              Name
            </label>

            <input
              type="text"
              className="input input-bordered w-full mt-2"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div>

            <label className="font-semibold">
              Photo URL
            </label>

            <input
              type="text"
              className="input input-bordered w-full mt-2"
              value={photo}
              onChange={(e) =>
                setPhoto(e.target.value)
              }
            />

          </div>

          <button
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Update Profile"}
          </button>

        </form>

      </div>

    </div>
  );
}