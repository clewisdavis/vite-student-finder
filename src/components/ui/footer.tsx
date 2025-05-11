function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark text-center p-5 border-t border-border-light dark:border-border-dark">
      <p className="mb-2">Student Finder</p>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/support" className="hover:underline">
              Support
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:underline">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
