import React from "react";
import { Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Richard Jackson",
    role: "Chief Executive Officer",
    image: "/team1.jpg", // Replace with your actual image path
  },
  {
    name: "Laura Martinez",
    role: "Managing Director",
    image: "/team2.jpg",
  },
  {
    name: "Jennifer Brown",
    role: "Operation Officer",
    image: "/team3.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#090029] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Meet Our Leadership Team
        </h2>
        <p className="text-gray-400 text-lg">
          Dedicated professionals leading with innovation and excellence
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#0F0147] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-purple-700/30"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="flex justify-center items-center gap-2 text-purple-400">
                <Briefcase size={18} /> {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
