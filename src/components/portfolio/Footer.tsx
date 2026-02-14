const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          By Muhammad Lutfi Kurniawan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
