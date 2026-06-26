import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/browse-recipes">Browse Recipes</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}