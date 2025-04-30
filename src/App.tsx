import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';

function App() {
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
            Student Details
          </h2>
          {/* Student detail content */}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
