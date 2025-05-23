import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import mockCourses from './mockCourses';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

// Updated Student type to include email
interface Student {
  name: string;
  age: number;
  school: string;
  grade: string;
  gpa: number;
  lastLogin: string;
  preferredContact: string;
  location: string;
  courses: string[]; // Array of course codes
  email: string; // New email field
}

// Fake data for StudentCard component
const students: Student[] = [
  {
    name: 'Alice Johnson',
    age: 14,
    school: 'Springfield High',
    grade: '9th',
    gpa: 3.8,
    lastLogin: 'Monday, April 28th 8:15AM EST',
    preferredContact: '910-326-3567',
    location: 'Durham, NC',
    courses: ['BIO101', 'MATH101', 'HIST101'],
    email: 'alice.johnson@springfieldhigh.com',
  },
  {
    name: 'Bob Smith',
    age: 15,
    school: 'Apex High',
    grade: '10th',
    gpa: 3.5,
    lastLogin: 'Sunday, April 27th 2:30PM EST',
    preferredContact: '919-555-1234',
    location: 'Raleigh, NC',
    courses: ['CHEM201', 'MATH201', 'ENG201'],
    email: 'bob.smith@apexhigh.com',
  },
  {
    name: 'Charlie Brown',
    age: 16,
    school: 'Holly Grove High',
    grade: '11th',
    gpa: 3.9,
    lastLogin: 'Saturday, April 26th 9:45AM EST',
    preferredContact: '984-123-4567',
    location: 'Charlotte, NC',
    courses: ['PHYS301', 'MATH301', 'ENG301'],
    email: 'charlie.brown@hollygrovehigh.com',
  },
  {
    name: 'Diana Prince',
    age: 17,
    school: 'Springfield High',
    grade: '12th',
    gpa: 4.0,
    lastLogin: 'Friday, April 25th 4:00PM EST',
    preferredContact: '910-987-6543',
    location: 'Greensboro, NC',
    courses: ['BIO401', 'MATH401', 'ENG401'],
    email: 'diana.prince@springfieldhigh.com',
  },
  {
    name: 'Ethan Hunt',
    age: 14,
    school: 'Apex High',
    grade: '9th',
    gpa: 3.7,
    lastLogin: 'Thursday, April 24th 11:20AM EST',
    preferredContact: '919-222-3333',
    location: 'Wilmington, NC',
    courses: ['BIO101', 'ART101', 'HE101'],
    email: 'ethan.hunt@apexhigh.com',
  },
  {
    name: 'Fiona Gallagher',
    age: 15,
    school: 'Holly Grove High',
    grade: '10th',
    gpa: 3.6,
    lastLogin: 'Wednesday, April 23rd 1:10PM EST',
    preferredContact: '984-444-5555',
    location: 'Asheville, NC',
    courses: ['CHEM201', 'ENG202', 'SPAN101'],
    email: 'fiona.gallagher@hollygrovehigh.com',
  },
  {
    name: 'George Weasley',
    age: 16,
    school: 'Springfield High',
    grade: '11th',
    gpa: 3.4,
    lastLogin: 'Tuesday, April 22nd 3:50PM EST',
    preferredContact: '910-666-7777',
    location: 'Cary, NC',
    courses: ['PHYS301', 'CS101', 'SPAN201'],
    email: 'george.weasley@springfieldhigh.com',
  },
  {
    name: 'Hannah Montana',
    age: 17,
    school: 'Apex High',
    grade: '12th',
    gpa: 3.8,
    lastLogin: 'Monday, April 21st 8:40AM EST',
    preferredContact: '919-888-9999',
    location: 'Chapel Hill, NC',
    courses: ['BIO401', 'MATH401', 'CS401'],
    email: 'hannah.montana@apexhigh.com',
  },
  {
    name: 'Ian Malcolm',
    age: 14,
    school: 'Holly Grove High',
    grade: '9th',
    gpa: 3.9,
    lastLogin: 'Sunday, April 20th 12:30PM EST',
    preferredContact: '984-000-1111',
    location: 'Fayetteville, NC',
    courses: ['BIO101', 'MATH101', 'HIST101'],
    email: 'ian.malcolm@hollygrovehigh.com',
  },
  {
    name: 'Jessica Jones',
    age: 15,
    school: 'Springfield High',
    grade: '10th',
    gpa: 3.7,
    lastLogin: 'Saturday, April 19th 2:00PM EST',
    preferredContact: '910-222-3333',
    location: 'High Point, NC',
    courses: ['CHEM201', 'ENG202', 'FR101'],
    email: 'jessica.jones@springfieldhigh.com',
  },
];

function App() {
  // State to track search results
  const [searchQuery, setSearchQuery] =
    useState<string>('');

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      student.school
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  // State to track the selected student
  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 min-h-0">
        <section
          id="search-results"
          className="bg-surface-light p-5 border border-gray-300 rounded-lg overflow-y-auto min-h-0"
        >
          <h2 className="text-lg font-bold mb-3">
            Search Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedStudent(student)
                  }
                  className="cursor-pointer"
                >
                  <StudentCard
                    name={student.name}
                    age={student.age}
                    school={student.school}
                    grade={student.grade}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No students found.
              </p>
            )}
          </div>
        </section>

        <section
          id="student-detail"
          className="bg-surface-light p-5 border border-gray-300 rounded-lg overflow-y-auto min-h-0"
        >
          <h2 className="text-lg font-bold mb-3">
            Student Details
          </h2>
          {selectedStudent ? (
            <StudentDetail student={selectedStudent} />
          ) : (
            <p>Select a student to view their details.</p>
          )}
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
// Updated StudentCard component to include `courses` and removed unused properties
// Updated StudentCard to accept only required props
interface StudentCardProps {
  name: string;
  age: number;
  school: string;
  grade: string;
}

function StudentCard({
  name,
  age,
  school,
  grade,
}: StudentCardProps) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}`;

  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow-md flex flex-row items-center hover:bg-blue-50 transition-colors">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="rounded-full mr-6"
      />
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="text-sm">
          <p>Age: {age}</p>
          <p>School: {school}</p>
          <p>Grade: {grade}</p>
        </div>
      </div>
    </div>
  );
}

// Student Detail Component
// Contains the details of the student
// Avatar, Name, Age, School, Grade, GPA
// Call to action, Contact and Create a Log Entry
function StudentDetail({ student }: { student: Student }) {
  // Filter courses for the selected student
  const filteredCourses = mockCourses.filter((course) =>
    student.courses.includes(course.courseCode)
  );

  return (
    <div className="flex flex-col bg-white p-0 rounded-lg">
      <div className="flex flex-row gap-5 items-center pb-5">
        <div className="flex">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              student.name
            )}`}
            alt={`${student.name}'s avatar`}
            className="rounded-full mb-4"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">
            {student.name}
          </h3>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col text-sm">
              <p>Age: {student.age}</p>
              <p>School: {student.school}</p>
              <p>Grade: {student.grade}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p>GPA: {student.gpa}</p>
              <p>Location: {student.location}</p>
              <p>Contact: {student.preferredContact}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center pb-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Email Student</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Email Student</DialogTitle>
            <DialogDescription>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    To
                  </label>
                  <input
                    type="email"
                    value={student.email} // Updated to use the email field
                    readOnly
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 min-h-[100px]"
                    placeholder={`Write your message to ${student.name}...`}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" variant="default">
                    Send
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        <Button variant="outline">Create Log Entry</Button>
      </div>
      <hr />
      <StudentCourseList courses={filteredCourses} />
    </div>
  );
}

// Student Course List Component
// List of courses the student is enrolled in
// Course Name, Course Code, Instructor, Average Grade
function StudentCourseList({
  courses,
}: {
  courses: typeof mockCourses;
}) {
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
