import React from "react";
import { ArrowUpRight, User, MessageSquare } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      category: "Cyber Security",
      author: "ligen",
      comments: "2 Comments",
      title: "Cyber Security important for every computer",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice.",
    },
    {
      category: "Cyber Security",
      author: "ligen",
      comments: "No Comments",
      title: "Super computer in added a latest",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice.",
    },
    {
      category: "Cyber Security",
      author: "ligen",
      comments: "No Comments",
      title: "Super computer in added a latest",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice.",
    },
  ];

  return (
    <div className="bg-[#08001a] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-14 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Created Unique
          </span>{" "}
          Data-Based <br className="hidden sm:block" />
          <span className="text-white">Apps & AI Solutions Both</span>
        </h2>
      </div>

      {/* Blog Posts */}
      <div className="space-y-12 sm:space-y-16">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start justify-between border-b border-gray-700 pb-10 sm:pb-12"
          >
            {/* Left Side - Text */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6">
                <span className="bg-[#151030] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm sm:text-lg">
                  <User size={18} className="mr-2 text-purple-500" />
                  {post.author}
                </div>
                <div className="flex items-center text-gray-400 text-sm sm:text-lg">
                  <MessageSquare size={18} className="mr-2 text-purple-500" />
                  {post.comments}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                {post.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {post.description}
              </p>
            </div>

            {/* Right Side - Icon */}
            <div className="mt-6 md:mt-0 self-center md:self-auto">
              <button className="hover:bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-5 md:p-6 rounded-full hover:scale-110 transition-transform shadow-lg">
                <ArrowUpRight
                  size={26}
                  strokeWidth={2.5}
                  className="sm:size-32 md:size-36"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
