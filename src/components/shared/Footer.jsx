import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <Logo />

          <p className="text-gray-500">
            © 2026 RecipeHub. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}