import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa'; // For YouTube logo
import CircularProgress from './CircularProgressIndicator'; // Import the CircularProgress component
import Modal from './Modal'; // Import the Modal component
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { dsaProblems, DSAProblems as Course } from '../data/dsaProblems';

const CourseTable: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>(dsaProblems);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    // Load data from local storage
    useEffect(() => {
        const savedCourses = localStorage.getItem('courses');
        if (savedCourses) {
            const parsedCourses: Course[] = JSON.parse(savedCourses);

            // Update state with the saved courses, merging with default values
            let correctCourses:Course[]=[]
            for(let i=0;i<dsaProblems.length;i++){
                for(let j=0;j<parsedCourses.length;j++){
                    if(dsaProblems[i].id===parsedCourses[j].id){
                        dsaProblems[i]=parsedCourses[j];
                    }
                }
                correctCourses.push(dsaProblems[i]);
            }
    
            setCourses(correctCourses);
        }
    }, []);

    // Save data to local storage whenever courses state changes
    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
    }, [courses]);

    // Handle checkbox change
    const handleStatusChange = (id: number) => {
        setCourses(prevCourses =>
            prevCourses.map(course =>
                course.id === id ? { ...course, status: !course.status } : course
            )
        );
    };

    // Handle revision change
    const handleRevisionChange = (id: number) => {
        setCourses(prevCourses =>
            prevCourses.map(course =>
                course.id === id ? { ...course, revision: !course.revision } : course
            )
        );
    };

    // Handle notes change
    const handleNoteChange = (id: number, newNotes: string) => {
        setCourses(prevCourses =>
            prevCourses.map(course =>
                course.id === id ? { ...course, notes: newNotes } : course
            )
        );
    };

    // Handle practice button click
    const handlePracticeClick = (url: string) => {
        window.open(url, '_blank');
    };

    const solvedCount = courses.filter(course => course.status).length;
    const totalCount = courses.length;

    const handleOpenModal = (course: Course) => {
        setSelectedCourse(course);
    };

    const handleCloseModal = () => {
        setSelectedCourse(null);
    };

    const handleSaveNotes = (id: number, notes: string) => {
        handleNoteChange(id, notes);
        handleCloseModal(); // Close the modal after saving notes
    };

    // Determine if the view is mobile or not
    const isMobile = window.innerWidth < 768;

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
                                <th className="p-4">Practice</th>
                                <th className="p-4">Notes</th>
                                <th className="p-4">Difficulty</th>
                                <th className="p-4">Revision</th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id} className="border-t border-gray-700 hover:bg-gray-800">
                                {/* Render Status and other columns only if not mobile */}
                                {!isMobile && (
                                    <>
                                        <td className="p-4">
                                            {course.status ? (
                                                <MdCheckBox
                                                    onClick={() => handleStatusChange(course.id)}
                                                    className="text-amber-400 cursor-pointer"
                                                    size={24}
                                                />
                                            ) : (
                                                <MdCheckBoxOutlineBlank
                                                    onClick={() => handleStatusChange(course.id)}
                                                    className="text-amber-400 cursor-pointer"
                                                    size={24}
                                                />
                                            )}
                                        </td>
                                        <td className="p-4 font-medium">{course.topic}</td>
                                        <td className="p-4">
                                            <a
                                                href={course.article}
                                                className="text-amber-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Read Article
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
                                        <td className="p-4">
                                            <button
                                                onClick={() => handlePracticeClick('your-playground-url')}
                                                className="bg-amber-500 text-gray-900 px-4 py-2 rounded-full hover:bg-amber-400 transition-colors"
                                            >
                                                {course.practice}
                                            </button>
                                        </td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => handleOpenModal(course)}
                                                className="bg-amber-500 text-gray-900 px-4 py-2 rounded-full hover:bg-amber-400 transition-colors"
                                            >
                                                View/Add Notes
                                            </button>
                                        </td>
                                        <td className="p-4">{course.difficulty}</td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => handleRevisionChange(course.id)}
                                                className="text-amber-400 hover:text-amber-300"
                                            >
                                                {course.revision ? '⭐' : '☆'}
                                            </button>
                                        </td>
                                    </>
                                )}

                                {/* Render only the topic and YouTube icon for mobile */}
                                {isMobile && (
                                    <>
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

            {selectedCourse && (
                <Modal
                    isOpen={!!selectedCourse}
                    onClose={handleCloseModal}
                    notes={selectedCourse.notes}
                    onNotesChange={(newNotes: string) => handleSaveNotes(selectedCourse.id, newNotes)}
                />
            )}
        </div>
    );
};

export default CourseTable;
