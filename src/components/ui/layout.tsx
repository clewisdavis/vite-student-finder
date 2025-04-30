import React from 'react';
import { Header } from './header';

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />

      <main className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <section
          id="search-results"
          className="bg-white p-5 border border-gray-300"
        >
          <h2 className="text-lg font-bold mb-3">
            Search Results
          </h2>
          {/* Search results content */}
        </section>

        <section
          id="student-detail"
          className="bg-white p-5 border border-gray-300"
        >
          <h2 className="text-lg font-bold mb-3">
            Student Detail
          </h2>
          {/* Student detail content */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-5">
        <p className="mb-2">Student Finder</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:underline"
              >
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
    </div>
  );
};

export default Layout;
