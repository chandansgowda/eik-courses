import { useEffect, useState } from 'react';

interface Course {
  id: number;
  course_name: string;
  course_description: string;
  course_thumbnail: string;
}

const Cards = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch the JSON data from the public directory
    fetch('/data/main.json')
      .then((response) => response.json())
      .then((data) => {
        // Extract courses array from the JSON data
        setCourses(data.courses ?? []);
      })
      .catch((error) => console.error('Error fetching JSON data:', error));
  }, []);

  return (
    <div className="mx-auto bg-gray-900 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 bg-gray-900 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {courses.map((course) => (
          <article
            key={course.id}
            className="flex flex-col items-start bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              alt={course.course_name}
              src={course.course_thumbnail}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col justify-between flex-grow">
              <h4 className="text-2xl font-bold text-amber-400 mb-2">
                {course.course_name}
              </h4>
              <p className="text-sm text-amber-200 mb-4">
                {course.course_description}
              </p>
              <a
                href={`/courses/${course.id}`}
                className="self-start bg-amber-500 text-gray-900 px-4 py-2 rounded-full hover:bg-amber-400 transition-colors"
              >
                Explore Course
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Cards;

