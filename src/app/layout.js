import "./globals.css";

import AuthProvider from "@/providers/AuthProvider";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "RecipeHub",
  description: "Recipe Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

        </AuthProvider>

      </body>
    </html>
  );
}