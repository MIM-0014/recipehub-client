"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  const handleRole = async (email, role) => {
    try {
      await updateUserRole(email, role);

      toast.success("Role Updated");

      loadUsers();
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  const handleBlock = async (email, status) => {
    try {
      await updateBlockStatus(email, status);

      toast.success("User Updated");

      loadUsers();
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        👥 Manage Users
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="table">

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user._id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>

                  <span
                    className={`badge ${
                      user.role === "admin"
                        ? "badge-error"
                        : "badge-primary"
                    }`}
                  >
                    {user.role}
                  </span>

                </td>

                <td>

                  {user.isBlocked ? (
                    <span className="badge badge-warning">
                      Blocked
                    </span>
                  ) : (
                    <span className="badge badge-success">
                      Active
                    </span>
                  )}

                </td>

                <td className="space-x-2">

                  {user.role === "admin" ? (
                    <button
                      onClick={() =>
                        handleRole(user.email, "user")
                      }
                      className="btn btn-sm btn-outline"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleRole(user.email, "admin")
                      }
                      className="btn btn-sm btn-primary"
                    >
                      Make Admin
                    </button>
                  )}

                  {user.isBlocked ? (
                    <button
                      onClick={() =>
                        handleBlock(user.email, false)
                      }
                      className="btn btn-sm btn-success"
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleBlock(user.email, true)
                      }
                      className="btn btn-sm btn-error"
                    >
                      Block
                    </button>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}