const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold text-foreground tracking-tight">
          pathwei<span className="text-accent">.ai</span>
        </span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} pathwei.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
