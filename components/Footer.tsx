const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-12">
      <div className="flex justify-center items-center">
        <p className="font-body text-xs text-muted-foreground tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Lucas Zanette Foltran
        </p>
      </div>
    </footer>
  );
};

export default Footer;
