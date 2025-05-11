import React from 'react';
import slope from "../assets/slope.jpeg"; 
import uc from "../assets/uc.jpeg"; 
import ctp from "../assets/ctp.jpeg"; 


const experiences = [
  {
    title: "Software Developer Intern",
    company: "Changing the present",
    img: ctp,
    period: "Jan 2025 - Present",
    description: ["Revamped donation features using React.js and Node.js, building reusable components and optimizing performance, which led to a 28% increase in user retention within 3 months.","Engineered secure user authentication with JWT, ensuring data protection and reliability, resulting in a 15% rise in repeat donor registrations.","Reduced backend response time by 40% by restructuring MongoDB queries and optimizing Express.js API logic, improving platform speed and stability.","Improved mobile and accessibility support by applying responsive design and WCAG standards, increasing engagement from mobile users and visually impaired donors by 20%."]
  },
  {
    title: "Software Developer Intern",
    company: "University of Cincinnati ",
    img: uc,
    period: "Jan 2024 - Nov 2024",
    description: ["Built a Cloud-Based Event Management Dashboard using React.js, Spring Boot, and PostgreSQL, enabling university-wide event creation and tracking—boosting student engagement by 40%.","Implemented secure role-based access control (RBAC) with Spring Security, OAuth 2.0, and JWT—safeguarding access for over 1,000 users and ensuring smooth role-specific functionality.","Automated CI/CD pipelines with Docker and AWS, enabling scalable deployments and continuous delivery—reducing release time by 95% and eliminating deployment errors."]
  },
  {
    title: "Software Engineer",
    company: "Slope Rate Techno Private Ltd. ",
    img: slope,
    period: "Mar 2021 – Jan 2023 ",
    description: ["Built a scalable cross-platform ERP system using React.js, React Native, and Firebase, streamlining inventory, supply chain, and financial workflows—resulting in a 30% improvement in operational efficiency for enterprise clients.","Developed a real-time order tracking feature with WebSockets and Firebase, enabling businesses to monitor inventory and shipments live—leading to a 50% reduction in delivery-related customer complaints.","Created an AI-driven demand forecasting module with TensorFlow.js, analyzing usage trends to predict inventory needs—helping reduce overstock by 25% and minimize stockouts by 40%.","Optimized frontend performance through code splitting, lazy loading, and Webpack tuning—reducing page load times by 40% and significantly improving user engagement and retention."]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white px-4 text-center text-[#640D5F] dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-[#640D5F] dark:text-white mt-5 mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl p-6 shadow-md text-left">
          {/* Header row with text and image */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#640D5F]">{exp.title}</h3>
              <p className="text-gray-600">
                {exp.company} | {exp.period}
              </p>
            </div>
            <img
              src={exp.img}
              alt={`${exp.company} logo`}
              className="w-14 h-14 object-cover rounded-md ml-4"
            />
          </div>
        
          {/* Description */}
          {Array.isArray(exp.description) ? (
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 mt-4">{exp.description}</p>
          )}
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Experience;
