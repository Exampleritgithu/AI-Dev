import React from "react";
import { Cloud, Code, Server } from "lucide-react";
import ServicesCard from "./ServicesCard";

const Services = () => {
const services = [
{
icon: Cloud,
title: "Cloud Development",
description: "Build scalable cloud-based applications and solutions.",
link: "/services/cloud",
},
{
icon: Code,
title: "Web Development",
description: "Create responsive and modern websites using latest technologies.",
link: "/services/web",
},
{
icon: Server,
title: "Server Management",
description: "Manage and optimize your servers for high performance.",
link: "/services/server",
},
{
icon: Cloud,
title: "Cloud Security",
description: "Secure your cloud infrastructure with advanced protocols.",
link: "/services/cloud-security",
},
{
icon: Code,
title: "Mobile App Development",
description: "Develop cross-platform mobile apps with modern frameworks.",
link: "/services/mobile-app",
},
{
icon: Server,
title: "Database Management",
description: "Efficiently manage and optimize your databases.",
link: "/services/database",
},
];

return ( <div className="bg-[#030026] min-h-screen text-white">

```
  {/* Hero Section */}  
  <section  
    className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"  
    style={{  
      backgroundImage:  
        "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')",  
    }}  
  >  
    <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#0b0033]/90"></div>  
    <div className="relative text-center">  
      <div className="flex justify-center space-x-2 text-gray-300 text-sm mb-2">  
        <a href="#" className="hover:text-purple-400">Home</a>  
        <span>/</span>  
        <span>Services</span>  
      </div>  
      <h1 className="text-4xl md:text-6xl font-bold text-white">Services</h1>  
    </div>  
  </section>  

  {/* Services Cards Section */}  
  <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">  
    {services.map((service, index) => (  
      <ServicesCard  
        key={index}  
        icon={service.icon}  
        title={service.title}  
        description={service.description}  
        link={service.link}  
      />  
    ))}  
  </section>  

</div>  


);
};

export default Services;
