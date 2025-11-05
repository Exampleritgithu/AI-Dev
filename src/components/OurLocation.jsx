import React from "react";
import { MapPin, Phone } from "lucide-react";

const OurLocation = () => {
  const locations = [
    {
      city: "New York, USA",
      address:
        "USA Address - 254 Chapman Rd, Ste 208 #13379 Newark, Delaware",
      phone: "+202-9393-939399",
    },
    {
      city: "Ontario, Canada",
      address:
        "Canada Address - 181 University Avenue, Suite 1700, Ontario, Canada",
      phone: "+202-9393-939398",
    },
    {
      city: "Sydney, Australia",
      address:
        "Australia Address - 854 Jetman Rd, Let 442 #10119 Sydney, Jerins",
      phone: "+202-9393-939368",
    },
  ];

  return (
    <section className="bg-[#08001a] text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Our
          </span>{" "}
          Locations
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Find our offices around the world and reach out to our teams easily.
        </p>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a0838] to-[#0b001e] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-purple-700/20 border border-gray-800 transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {loc.city}
            </h3>
            <hr className="border-gray-700 mb-5" />
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-400 mt-1" />
                <p>{loc.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400" />
                <p className="text-white">{loc.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLocation;
