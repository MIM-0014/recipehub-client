"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import {
  getAllUsers,
  updateUserRole,
  updateBlockStatus,
} from "@/services/adminApi";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRole = async (email, currentRole) => {
    const newRole =
      currentRole === "admin" ? "user" : "admin";

    const result = await Swal.fire({
      title: "Change Role?",
      text: `${email} will become ${newRole}.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (!result.isConfirmed) return;

    try {
      await updateUserRole(email, newRole);
      toast.success("Role Updated");
      loadUsers();
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  const handleBlock = async (email, blocked) => {
    const result = await Swal.fire({
      title: blocked ? "Unblock User?" : "Block User?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    });

    if (!result.isConfirmed) return;

    try {
      await updateBlockStatus(email, !blocked);
      toast.success("User Updated");
      loadUsers();
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        👥 Manage Users
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">

        <table className="table">

          <thead>

            <tr>

              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Premium</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.email}>

                <td>{user.name || "Unknown"}</td>

                <td>{user.email}</td>

                <td>

                  <span
                    className={`badge ${
                      user.role === "admin"
                        ? "badge-success"
                        : "badge-ghost"
                    }`}
                  >
                    {user.role}
                  </span>

                </td>

                <td>

                  {user.isPremium ? (
                    <span className="badge badge-warning">
                      Premium
                    </span>
                  ) : (
                    <span className="badge">
                      Free
                    </span>
                  )}

                </td>

                <td>

                  {user.isBlocked ? (
                    <span className="badge badge-error">
                      Blocked
                    </span>
                  ) : (
                    <span className="badge badge-success">
                      Active
                    </span>
                  )}

                </td>

                <td>

                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        handleRole(
                          user.email,
                          user.role
                        )
                      }
                      className="btn btn-warning btn-sm"
                    >
                      Change Role
                    </button>

                    <button
                      onClick={() =>
                        handleBlock(
                          user.email,
                          user.isBlocked
                        )
                      }
                      className={`btn btn-sm ${
                        user.isBlocked
                          ? "btn-success"
                          : "btn-error"
                      }`}
                    >
                      {user.isBlocked
                        ? "Unblock"
                        : "Block"}
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}