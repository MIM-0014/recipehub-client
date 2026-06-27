import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-6 font-medium">
            <Link href="/">Home</Link>

            <Link href="/browse-recipes">
              Browse Recipes
            </Link>

            <Link href="/login">
              Login
            </Link>

            <Link href="/register">
              Register
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}