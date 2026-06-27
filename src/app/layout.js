import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
  title: "RecipeHub",
  description: "Recipe Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <AuthProvider>
          <Navbar />

          <main className="min-h-[calc(100vh-128px)]">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}