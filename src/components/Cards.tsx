import React from 'react';

const posts = [
  {
    id: 1,
    course_name: "DSA in Python",
    course_description: "Learn DSA in Python easily",
    course_thumbnail: "https://w0.peakpx.com/wallpaper/29/249/HD-wallpaper-python-logo-computer-lock-locked-phone-programming.jpg",
  },
];

const Cards = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h3 className="text-center text-3xl font-bold text-amber-400 mb-12">View All Courses</h3>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              alt={post.course_name}
              src={post.course_thumbnail}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col justify-between flex-grow">
              <h4 className="text-2xl font-bold text-amber-400 mb-2">
                {post.course_name}
              </h4>
              <p className="text-sm text-amber-200 mb-4">
                {post.course_description}
              </p>
              <a
                href="/courses/1"
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
