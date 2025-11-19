import React from "react";

const comments = [
  {
    id: 1,
    name: "Ligen",
    date: "February 6, 2024 at 6:01 AM",
    content:
      "An extensive exercise in reskilling and/or upskilling the existing workforce, believe staffing experts, is one of the ways that telcos can future proof their work. Indian mobile phone operators are expected to benefit from it.",
    avatar:
      "https://via.placeholder.com/60x60.png?text=User", // Replace with real image
  },
  {
    id: 2,
    name: "Alex",
    date: "February 6, 2024 at 6:45 AM",
    content:
      "Totally agree! Upskilling is essential to stay competitive in today’s rapidly evolving digital landscape.",
    avatar:
      "https://via.placeholder.com/60x60.png?text=User", // Replace with real image
  },
];

const CommentsSection = () => {
  return (
    <div className="bg-[#0b0325] text-white p-8 rounded-lg mt-10 border border-[#1f144a]">
      {/* Next Article */}
      <div className="flex items-center text-white font-semibold mb-6 cursor-pointer hover:text-purple-400 transition">
        <span className="mr-2">←</span> Next Article
      </div>

      {/* Comment Count */}
      <h2 className="text-2xl font-bold mb-6">2 Comments</h2>

      <hr className="border-[#24195c] mb-8" />

      {/* Comments List */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-5">
            {/* Avatar */}
            <img
              src={comment.avatar}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border-2 border-purple-500"
            />
            {/* Comment Content */}
            <div>
              <h3 className="text-lg font-semibold">{comment.name}</h3>
              <p className="text-sm text-purple-400 mb-3 uppercase font-semibold">
                {comment.date}
              </p>
              <p className="text-gray-300 leading-relaxed">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
