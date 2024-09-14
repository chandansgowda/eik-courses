import React, { useState, useEffect } from 'react';
import { FaYoutube, FaFileCode, FaCode, FaNewspaper } from 'react-icons/fa'; // For YouTube, LeetCode, Coding Ninjas, and Newspaper icons
import { SiGeeksforgeeks } from 'react-icons/si';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // For Check and Close icons
import CircularProgress from './CircularProgressIndicator'; // Import the CircularProgress component
import { useParams } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';

const CourseTable: React.FC = () => {
    const { id } = useParams<{ id?: string }>(); // Get the course ID from URL params
    const [courses, setCourses] = useState<any[]>([]); // Use any[] since the structure is dynamic
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Load data from local storage
    useEffect(() => {
        const savedCourses = localStorage.getItem('courses');
        const fetchDefaultCourses = async () => {
            try {
                const response = await fetch(`/data/${id}.json`);
                const defaultCourses = await response.json();
                let correctCourses: any[] = [];

                if (savedCourses) {
                    const parsedCourses = JSON.parse(savedCourses);

                    // Merge saved courses with default values
                    for (let i = 0; i < defaultCourses.length; i++) {
                        for (let j = 0; j < parsedCourses.length; j++) {
                            if (defaultCourses[i].id === parsedCourses[j].id) {
                                defaultCourses[i] = parsedCourses[j];   
                            }
                        }
                        correctCourses.push(defaultCourses[i]);
                    }
                } else {
                    correctCourses = defaultCourses;
                }
                setCourses(correctCourses);

            } catch (error) {
                console.error('Error fetching default course data:', error);
            }
        };

        fetchDefaultCourses();
    }, [id]);

    // Save data to local storage whenever courses state changes
    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
    }, [courses]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle checkbox change
    const handleStatusChange = (id: number) => {
        setCourses(prevCourses =>
            prevCourses.map(course =>
                course.id === id ? { ...course, status: !course.status } : course
            )
        );
    };
    const handleRevisionChange = (id: number) => {
        setCourses(prevCourses =>
            prevCourses.map(course =>
                course.id === id ? { ...course, revision: !course.revision } : course
            )
        );
    };

    const solvedCount = courses.filter(course => course.status).length;
    const totalCount = courses.length;

    return (
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            {!isMobile && (
                <>
                    <h3 className="text-center text-4xl font-extrabold text-amber-300 mb-12">Your Progress</h3>
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex items-center">
                            <CircularProgress value={solvedCount} maxValue={totalCount} />
                            <div className="text-center text-amber-300 ml-4">
                                <span className="text-xl font-semibold">{solvedCount}/{totalCount} Solved</span>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-900 text-amber-300 shadow-lg rounded-lg">
                    <thead>
                        {!isMobile && (
                            <tr className="bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                                <th className="p-4">Status</th>
                                <th className="p-4">Topic</th>
                                <th className="p-4">Article</th>
                                <th className="p-4">YouTube</th>
                                <th className="p-4">Difficulty</th>
                                <th className="p-4">LeetCode</th>
                                <th className="p-4">GeeksforGeeks</th>
                                <th className="p-4">Coding Ninjas</th>
                                <th className="p-4">Revision</th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {courses.map((course: any) => (
                            <tr key={course.id} className="border-t border-gray-700 hover:bg-gray-800">
                                {/* Render Status and other columns only if not mobile */}
                                {!isMobile && (
                                    <>
                                        <td className="p-4">
                                            <span
                                                onClick={() => handleStatusChange(course.id)}
                                                className={`cursor-pointer ${course.status ? 'text-amber-400' : 'text-gray-500'}`}
                                            >
                                                {course.status ? <AiOutlineCheck className="inline-block w-5 h-5" /> : <AiOutlineClose className="inline-block w-5 h-5" />}
                                            </span>
                                        </td>
                                        <td className="p-4 font-medium">{course.topic}</td>
                                        <td className="p-4">
                                            <a
                                                href={course.article}
                                                className="text-amber-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaNewspaper className="inline-block w-5 h-5" />
                                            </a>
                                        </td>
                                        <td className="p-4">
                                            {course.youtubeLink && (
                                                <a
                                                    href={course.youtubeLink}
                                                    className="text-amber-400 hover:text-amber-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaYoutube className="inline-block w-5 h-5" />
                                                </a>
                                            )}
                                        </td>
                                        <td className="p-4">{course.difficulty}</td>
                                        <td className="p-4">
                                            {course.leetcodeLink && (
                                                <a
                                                    href={course.leetcodeLink}
                                                    className="text-amber-400 hover:text-amber-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaFileCode className="inline-block w-5 h-5" />
                                                </a>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {course.geeksforgeeksLink && (
                                                <a
                                                    href={course.geeksforgeeksLink}
                                                    className="text-amber-400 hover:text-amber-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <SiGeeksforgeeks className="inline-block w-5 h-5" />
                                                </a>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {course.codingninjasLink && (
                                                <a
                                                    href={course.codingninjasLink}
                                                    className="text-amber-400 hover:text-amber-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaCode className="inline-block w-5 h-5" />
                                                </a>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                onClick={() => handleRevisionChange(course.id)} // Add this function for handling revision change
                                                className={`cursor-pointer ${course.revision ? 'text-amber-400' : 'text-gray-500'}`}
                                            >
                                                <CiStar className={`inline-block w-5 h-5 ${course.revision ? 'text-amber-400' : 'text-gray-500'}`} />
                                            </span>
                                        </td>
                                    </>
                                )}
                                {/* Render only the topic and optional icons for mobile */}
                                {isMobile && (
                                    <>
                                        <td className="p-4">Q{course.id}</td>
                                        <td className="p-4 font-medium">{course.topic}</td>
                                        <td className="p-4">
                                            {course.youtubeLink && (
                                                <a
                                                    href={course.youtubeLink}
                                                    className="text-amber-400 hover:text-amber-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaYoutube className="inline-block w-5 h-5" />
                                                </a>
                                            )}
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseTable;
