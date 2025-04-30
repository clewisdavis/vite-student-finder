import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';

// Fake data for StudentCard component
const students = [
  {
    name: 'Alice Johnson',
    age: 14,
    school: 'Springfield High',
    grade: '9th',
    gpa: 3.8,
  },
  {
    name: 'Bob Smith',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.5,
  },
  {
    name: 'Charlie Brown',
    age: 16,
    school: 'Springfield High',
    grade: '11th',
    gpa: 3.9,
  },
  {
    name: 'Diana Prince',
    age: 17,
    school: 'Springfield High',
    grade: '12th',
    gpa: 4.0,
  },
  {
    name: 'Ethan Hunt',
    age: 14,
    school: 'Springfield High',
    grade: '9th',
    gpa: 3.7,
  },
  {
    name: 'Fiona Gallagher',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.6,
  },
  {
    name: 'George Weasley',
    age: 16,
    school: 'Springfield High',
    grade: '11th',
    gpa: 3.4,
  },
  {
    name: 'Hannah Montana',
    age: 17,
    school: 'Springfield High',
    grade: '12th',
    gpa: 3.8,
  },
  {
    name: 'Ian Malcolm',
    age: 14,
    school: 'Springfield High',
    grade: '9th',
    gpa: 3.9,
  },
  {
    name: 'Jessica Jones',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.7,
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                age={student.age}
                school={student.school}
                grade={student.grade}
                gpa={student.gpa}
              />
            ))}
          </div>
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

// Student Card Component
// Name, Age, School, Grade, GPA
// Avatar of the student
function StudentCard({ name, age, school, grade, gpa }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=random`;

  return (
    <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-md flex flex-row items-center">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="rounded-full mr-6"
      />
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p>Age: {age}</p>
        <p>School: {school}</p>
        <p>Grade: {grade}</p>
        <p>GPA: {gpa}</p>
      </div>
    </div>
  );
}
