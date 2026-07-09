import "./globals.css";

import AuthProvider from "@/providers/AuthProvider";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "RecipeHub",
  description: "Recipe Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" suppressHydrationWarning>
      
      <body>
      

        <AuthProvider>

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

        </AuthProvider>
       
 <Toaster position="top-right" />
      </body>
    </html>
  );
}