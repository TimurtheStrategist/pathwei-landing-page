import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-heading text-xl font-bold text-foreground tracking-tight">
          pathwei<span className="text-primary">.ai</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
        </div>
        <Button variant="hero" size="sm" className="rounded-full">
          Get Early Access
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
