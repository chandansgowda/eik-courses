
export interface DSAProblems {
    id: number;
    course_name: string;
    course_description: string;
    topic: string;
    article: string;
    youtubeLink: string;
    practice: string;
    difficulty: string;
    revision: boolean;
    status: boolean;
    notes: string;
}

export const dsaProblems:DSAProblems[]=[
    {
        id: 1,
        course_name: "DSA in Python",
        course_description: "Master the Fundamentals of Data Structure and Algorithms in Python",
        topic: "Introduction",
        article: "https://example.com/article",
        youtubeLink: "https://www.youtube.com",
        practice: "Take to Playground",
        difficulty: "Easy",
        revision: false,
        status: false, // Default status
        notes: "" // Default notes
    },
    {
        id: 2,
        course_name: "DSA in Python",
        course_description: "Master the Fundamentals of Data Structure and Algorithms in Python",
        topic: "Introduction",
        article: "https://example.com/article",
        youtubeLink: "https://www.youtube.com",
        practice: "Take to Playground",
        difficulty: "Easy",
        revision: false,
        status: false, // Default status
        notes: "" // Default notes
    }
];
