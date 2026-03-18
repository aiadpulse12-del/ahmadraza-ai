const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-display font-bold text-gradient">AR.</span>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Ahmad Raza. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
