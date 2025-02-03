function Footer() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
