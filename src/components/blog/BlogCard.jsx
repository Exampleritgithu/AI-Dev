import React from "react";
import { User, MessageCircle } from "lucide-react"; // Lucide icons

const BlogCard = () => {
  // Blog cards data (six cards)
  const blogs = [
    {
      image: "Blog-1.jpg",
      author: "Ligen",
      comments: 2,
      title: "Cyber Security is Important for Every Computer",
      description:
        "We contribute to the implementation of projects from step 0: we help our partners by giving expert advice.",
    },
    {
      image: "Blog-2.jpg",
      author: "Ligen",
      comments: 0,
      title: "Supercomputer Added Latest Features",
      description:
        "Our team implements projects efficiently and provides guidance to ensure optimal results.",
    },
    {
      image: "Blog-3.jpg",
      author: "Ligen",
      comments: 3,
      title: "AI Transforming Digital Landscape",
      description:
        "Artificial Intelligence is revolutionizing digital solutions across industries.",
    },
    {
      image: "Blog-4.jpg",
      author: "Ligen",
      comments: 1,
      title: "Blockchain Technology for Finance",
      description:
        "Blockchain is changing how transactions are recorded securely and transparently.",
    },
    {
      image: "Blog-5.jpg",
      author: "Ligen",
      comments: 4,
      title: "Digital Marketing Trends in 2024",
      description:
        "Learn about the latest trends and techniques in digital marketing to grow your business.",
    },
    {
      image: "Blog-6.jpg",
      author: "Ligen",
      comments: 2,
      title: "Importance of Cybersecurity Awareness",
      description:
        "Awareness and education are key to keeping your systems and data safe.",
    },
  ];

  // Sidebar data
  const categories = [
    "Blockchain",
    "Cyber Security",
    "Digital",
    "Finance",
    "Security",
    "Uncategorized",
  ];

  const recentPosts = [
    {
      image: "https://via.placeholder.com/100x80?text=Post+1",
      date: "February 6, 2024",
      title: "Digital Problem Solving with AI",
    },
    {
      image: "https://via.placeholder.com/100x80?text=Post+2",
      date: "January 20, 2024",
      title: "Supercomputer Added Latest Features",
    },
  ];

  const tags = ["AI", "Blockchain", "Digital", "Finance", "Marketing", "Security"];

  return (
    <div className="min-h-screen bg-[#060014] text-white p-10">
      {/* Layout grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Blog Cards Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-[#0b0220] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-purple-400 text-sm mb-3 space-x-4">
                  <span className="flex items-center gap-1">
                    <User size={16} /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={16} /> {blog.comments} Comments
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <button className="text-purple-400 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="bg-[#0b0220] text-white p-6 rounded-lg shadow-lg space-y-10 h-fit">
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

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-5">
              {recentPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 border border-gray-700 rounded-lg hover:border-purple-500 transition"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                    <p className="text-white font-medium hover:text-purple-400 transition cursor-pointer">
                      {post.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-purple-600 hover:border-purple-600 hover:text-white transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
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

export default BlogCard;
