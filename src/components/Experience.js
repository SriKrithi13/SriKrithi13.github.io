import React from 'react';
import { motion } from 'framer-motion';


const experiences = [
  {
    title: "Software Engineer",
    company: "McKesson",
    period: "Sep 2024 – Present",
    description : [
  "Developed scalable B2B microservices using Java Spring Boot and React, facilitating pharmaceutical ordering for 4,500+ pharmacies and cutting API latency by 40% via distributed Redis caching.",
  "Automated complex medical prior authorization workflows using Azure Logic Apps and Kafka, accelerating patient access to critical specialty medications across twenty distribution centers and reducing manual administrative overhead.",
  "Engineered event-driven microservices using Apache Kafka to synchronize inventory across supply chain systems, achieving data consistency and eliminating stock discrepancies for $2M+ in daily shipments.",
  "Integrated Splunk and Micrometer for real-time distributed tracing across microservices, reducing Mean Time to Resolution (MTTR) for critical production incidents by 50% and ensuring 99.9% system availability.",
  "Revamped the pharmacy management dashboard using React and TypeScript, implementing React.lazy and code splitting to optimize rendering performance for heavy data grids used by internal stakeholders.",
  "Optimized complex SQL queries and stored procedures within Oracle databases, enabling real-time analytics for executive leadership to monitor operational efficiency and drug utilization without impacting production performance.",
  "Modernized CI/CD pipelines using Jenkins and Docker on Azure Kubernetes Service, significantly reducing deployment cycles while ensuring strict HIPAA compliance and zero downtime during release windows.",
  "Implemented comprehensive unit and integration testing frameworks using JUnit and Mockito, preventing critical production defects during the migration of legacy monoliths to a containerized microservices architecture."
]

  },
  {
    title: "Software Engineer",
    company: "Nion IT System",
    period: "Aug 2020 – July 2023",
    description : [
  "Developed robust RESTful APIs for a global logistics client using Java and Spring Boot, streamlining shipment tracking processes and handling over 10,000 daily transactions with high system reliability.",
  "Led the migration of legacy on-premise applications to AWS cloud infrastructure, utilizing EC2 and S3 to reduce operational overhead while enhancing system scalability and disaster recovery capabilities.",
  "Designed responsive user interfaces for an e-commerce platform using Angular and Bootstrap, increasing user engagement through intuitive navigation and seamless integration with backend payment gateway services.",
  "Refactored database schemas and indexed MySQL tables to optimize data retrieval speeds, resulting in improved query execution plans and stable application performance during peak high-traffic shopping seasons.",
  "Enforced static code analysis and security standards using SonarQube, reducing technical debt by 30% and preventing critical vulnerabilities prior to production deployment.",
  "Built internal automation tools using Python and FastAPI to streamline data reconciliation tasks, saving the operations team significant manual effort and eliminating data entry errors across client accounts.",
  "Collaborated within an Agile/Scrum team to deliver feature enhancements on two-week sprints, consistently meeting delivery timelines and reducing backlog items through effective peer code reviews."
]

  },
];

const Experience = () => {
  return (
    <motion.section id="experience" className="py-16 bg-white px-4 text-center text-[#640D5F] dark:bg-gray-900 dark:text-white" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}>
      <h2 className="text-4xl font-bold text-[#640D5F] dark:text-white mt-5 mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl p-6 shadow-md text-left">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#640D5F]">{exp.title}</h3>
              <p className="text-gray-600">
                {exp.company} | {exp.period}
              </p>
            </div>
            
          </div>
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
      </motion.section>
  );
};

export default Experience;
