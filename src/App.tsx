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
    lastLogin: 'Monday, April 28th 8:15AM EST',
  },
  {
    name: 'Bob Smith',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.5,
    lastLogin: 'Sunday, April 27th 2:30PM EST',
  },
  {
    name: 'Charlie Brown',
    age: 16,
    school: 'Springfield High',
    grade: '11th',
    gpa: 3.9,
    lastLogin: 'Saturday, April 26th 9:45AM EST',
  },
  {
    name: 'Diana Prince',
    age: 17,
    school: 'Springfield High',
    grade: '12th',
    gpa: 4.0,
    lastLogin: 'Friday, April 25th 4:00PM EST',
  },
  {
    name: 'Ethan Hunt',
    age: 14,
    school: 'Springfield High',
    grade: '9th',
    gpa: 3.7,
    lastLogin: 'Thursday, April 24th 11:20AM EST',
  },
  {
    name: 'Fiona Gallagher',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.6,
    lastLogin: 'Wednesday, April 23rd 1:10PM EST',
  },
  {
    name: 'George Weasley',
    age: 16,
    school: 'Springfield High',
    grade: '11th',
    gpa: 3.4,
    lastLogin: 'Tuesday, April 22nd 3:50PM EST',
  },
  {
    name: 'Hannah Montana',
    age: 17,
    school: 'Springfield High',
    grade: '12th',
    gpa: 3.8,
    lastLogin: 'Monday, April 21st 8:40AM EST',
  },
  {
    name: 'Ian Malcolm',
    age: 14,
    school: 'Springfield High',
    grade: '9th',
    gpa: 3.9,
    lastLogin: 'Sunday, April 20th 12:30PM EST',
  },
  {
    name: 'Jessica Jones',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.7,
    lastLogin: 'Saturday, April 19th 2:00PM EST',
  },
];

const studentCourses = [
  {
    courseName: 'Introduction to Biology',
    courseCode: 'BIO101',
    instructor: 'Dr. Emily Carter',
    averageGrade: 90,
  },
  {
    courseName: 'Algebra II',
    courseCode: 'MATH201',
    instructor: 'Mr. John Smith',
    averageGrade: 87,
  },
  {
    courseName: 'World History',
    courseCode: 'HIST102',
    instructor: 'Ms. Sarah Johnson',
    averageGrade: 95,
  },
  {
    courseName: 'English Literature',
    courseCode: 'ENG202',
    instructor: 'Mrs. Laura White',
    averageGrade: 92,
  },
  {
    courseName: 'Physical Education',
    courseCode: 'PE101',
    instructor: 'Coach Mike Green',
    averageGrade: 88,
  },
  {
    courseName: 'Spanish Language',
    courseCode: 'SPAN101',
    instructor: 'Mr. Carlos Martinez',
    averageGrade: 91,
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
          <StudentDetail student={students[0]} />
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

// Student Detail Component
// Contains the details of the student
// Avatar, Name, Age, School, Grade, GPA
// Call to action, Contact and Create a Log Entry
function StudentDetail({ student }) {
  return (
    <div className="flex flex-col bg-white p-5 border border-gray-300 rounded-lg shadow-md">
      <div className="flex flex-row gap-5 items-center">
        <div className="flex">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              student.name
            )}&background=random`}
            alt={`${student.name}'s avatar`}
            className="rounded-full mb-4"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">
            {student.name}
          </h3>
          <p>Age: {student.age}</p>
          <p>School: {student.school}</p>
          <p>Grade: {student.grade}</p>
          <p>GPA: {student.gpa}</p>
        </div>
      </div>
      {/* Call to action buttons */}
      <StudentCourseList courses={studentCourses} />
    </div>
  );
}

// Student Course List Component
// List of courses the student is enrolled in
// Course Name, Course Code, Instructor, Average Grade
function StudentCourseList({ courses }) {
  return (
    <div className="bg-white py-5">
      <h3 className="text-lg font-bold mb-3">Courses</h3>
      <ul className="space-y-3">
        {courses.map((course, index) => (
          <li
            key={index}
            className="flex flex-row justify-between items-top pb-4"
          >
            <div className="flex flex-col">
              <span className="font-bold">
                {course.courseName}
              </span>
              <span>Code: {course.courseCode}</span>
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="flex flex-col items-end">
              <span>Average Grade:</span>
              <span className="text-2xl font-semibold">
                {course.averageGrade}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
