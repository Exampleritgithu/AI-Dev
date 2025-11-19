import React from "react";

const PrivacySection = () => {
  return (
    <div className="bg-[#050017] min-h-screen text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Information Collection */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Information Collection
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. 
            Voluptatem, <span className="text-purple-500 font-semibold">company name</span> saepe ullam 
            autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos 
            repudiandae fuga.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos 
            <span className="text-purple-500 font-semibold"> activities </span>
            ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? 
            Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente, iure, sit non. 
            At fuga ipsam veniam.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We Use Cookies
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos 
            doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio 
            soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente, iure, 
            sit non. At fuga ipsam veniam.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
            <li>How you run your business and your growth goals.</li>
            <li>How we apply analytics and performance improvements.</li>
            <li>We help optimize user experience and conversions.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default PrivacySection;
