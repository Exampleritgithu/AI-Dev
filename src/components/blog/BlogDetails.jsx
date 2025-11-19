import React from "react";
import { Search, User, Clock, MessageSquare } from "lucide-react"; // Lucide icons

const BlogDetails = () => {
  // Blog data
  const blogs = [
    {
      image:
        "https://img.freepik.com/free-photo/global-network-cyber-security_53876-121103.jpg",
      author: "Ligen",
      date: "February 6, 2024",
      comments: 2,
      title: "Cyber Security important for every computer",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/supercomputer-data-center_53876-125120.jpg",
      author: "Ligen",
      date: "February 6, 2024",
      comments: 0,
      title: "Super computer in added a latest features",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice.",
    },
  ];

  const categories = [
    "BlockChain",
    "Cyber Security",
    "Digital",
    "Finance",
    "Security",
    "Uncategorized",
  ];

  return (
    <div className="min-h-screen bg-[#060014] text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Blog Section */}
        <div className="lg:col-span-2 space-y-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-[#0b0220] text-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Author Info */}
              <div className="flex flex-wrap items-center text-purple-400 text-sm px-6 py-4 gap-4">
                <span className="flex items-center gap-2">
                  <User size={16} /> <span className="font-semibold">{blog.author}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {blog.date}
                </span>
                <span className="flex items-center gap-2">
                  <MessageSquare size={16} /> {blog.comments} Comments
                </span>
              </div>

              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-lg"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <button className="text-purple-400 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="bg-[#0b0220] text-white p-6 rounded-lg shadow-lg space-y-8 h-fit">
          {/* Search Box */}
          <div className="border border-gray-700 rounded-lg flex items-center overflow-hidden">
            <input
              type="text"
              placeholder="Search Here"
              className="bg-transparent w-full px-4 py-3 text-gray-200 focus:outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-3">
              <Search size={18} />
            </button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-300">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  • {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full text-2xl shadow-lg">
        ↑
      </button>
    </div>
  );
};

export default BlogDetails;
