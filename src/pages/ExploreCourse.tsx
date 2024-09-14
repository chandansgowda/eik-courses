import React, { useState } from "react";
import CourseTable from "../components/CourseTable";

const ExploreCourse: React.FC = () => {
    const [courseName, setCourseName] = useState<string | null>("DSA in Python");
    const [course_description, setCourseDescription] = useState<string | null>("Master the Fundamentals of Data Structure and Algorithms in Python");

    return (
        <div className="min-h-screen bg-gray-900 text-amber-300 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-center text-4xl font-extrabold text-amber-300 mb-6">{courseName}</h3>
                <h3 className="text-center text-2xl font-medium text-gray-400 mb-12">{course_description}</h3>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <CourseTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreCourse;

