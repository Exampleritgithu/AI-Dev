import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-[#0A0629] border-r border-[#1b1645] p-10 h-full hover:bg-[#120d36] transition-all duration-300">
      {/* Icon */}
      <div className="mb-6">
        <Icon className="text-[#8b5cf6] w-12 h-12" />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-semibold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed mb-8">
        {description}
      </p>

      {/* View Details */}
      <Link
        to={link}
        className="text-purple-400 font-medium flex items-center gap-2 group"
      >
        View Details
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ServicesCard;
