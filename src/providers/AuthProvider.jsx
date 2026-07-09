"use client";

import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/lib/firebase.config";
import api from "@/services/api";
import {
  saveUser,
  getCurrentUser,
} from "@/services/userApi";
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===========================
  // Register
  // ===========================
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ===========================
  // Login
  // ===========================
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ===========================
  // Google Login
  // ===========================
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ===========================
  // Update Firebase Profile
  // ===========================
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // ===========================
  // Logout
  // ===========================
const logout = async () => {
  console.log("1️⃣ Logout clicked");

  setLoading(true);

  try {
    console.log("2️⃣ Sending request");

    const res = await api.post("/auth/logout");

    console.log("3️⃣ Server response:", res.data);

    await signOut(auth);

    console.log("4️⃣ Firebase signed out");

    setUser(null);
    setCurrentUser(null);
  } catch (error) {
    console.log("❌ Logout Error:", error);
  } finally {
    setLoading(false);
  }
};
  // ===========================
  // Get Current User From Database
  // ===========================
  const refreshCurrentUser = async () => {
  try {
    const data = await getCurrentUser();
    setCurrentUser(data);
  } catch (error) {
    console.error(error);
  }
};

  

  // ===========================
  // Firebase Auth Observer
  // ===========================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentFirebaseUser) => {
        setUser(currentFirebaseUser);

        if (currentFirebaseUser) {
          try {
            const token =
              await currentFirebaseUser.getIdToken();

            await api.post("/auth/jwt", {
              token,
            });

            await refreshCurrentUser(
              currentFirebaseUser.email
            );
          } catch (error) {
            console.error(error);
          }
        } else {
          setCurrentUser(null);
        }

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ===========================
  // Context Values
  // ===========================
  const authInfo = {
  user,
  currentUser,
  loading,
  createUser,
  login,
  updateUserProfile,
  googleLogin,
  logout,
  refreshCurrentUser,
};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}