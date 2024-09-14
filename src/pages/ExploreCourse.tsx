import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import CourseTable from "../components/CourseTable";

interface Course {
  id: number;
  course_name: string;
  course_description: string;
  course_thumbnail: string;
}

const ExploreCourse: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // id can be undefined
  const [course, setCourse] = useState<Course | null>(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from main.json
        const mainResponse = await axios.get('/data/main.json');
        const mainData = mainResponse.data;

        // Fetch course data from mock.json
        const courseResponse = await axios.get('/data/main.json');
        const courseData = courseResponse.data;
        console.log(courseData)
        if (courseData && Array.isArray(courseData.courses)) {
          const courseItem = courseData.courses.find((course: Course) => course.id === parseInt(id || ''));
          setCourse(courseItem || null);
        } else {
          console.error('Courses data is missing or invalid in mock.json');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!course) {
    return <div className="text-center text-amber-300">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-amber-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-extrabold text-amber-300 mb-6">
          {course.course_name}
        </h3>
        <h3 className="text-center text-2xl font-medium text-gray-400 mb-12">
          {course.course_description}
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="overflow-x-auto">
            <CourseTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourse;

