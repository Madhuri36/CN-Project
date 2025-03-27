import React from "react";
import { PackageIcon, CodeIcon, GithubIcon, MailIcon } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-[var(--main-text)] px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full overflow-auto bg-cover bg-center">
      <div className="max-w-4xl text-center w-full bg-[var(--home-bg)] bg-opacity-50 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          About IP Dropper
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          IP Dropper is an open-source project for network device management,
          offering a user-friendly interface and efficient backend for device
          communication.
        </p>
      </div>

      {/* Version & Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="bg-[var(--bg-three)] bg-opacity-80 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <PackageIcon className="w-8 h-8 mr-3 text-[var(--main-text)]" />
            <h2 className="text-2xl font-semibold">Version Information</h2>
          </div>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">Current Version:</span> 1.0.0
            </li>
            <li>
              <span className="font-semibold">Release Date:</span> 2024
            </li>
            <li>
              <span className="font-semibold">License:</span> MIT
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg-three)] bg-opacity-80 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <CodeIcon className="w-8 h-8 mr-3 text-[var(--main-text)]" />
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
          </div>
          <ul className="list-disc list-inside space-y-3">
            <li>React</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-10 max-w-6xl w-full bg-[var(--bg-three)] bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Ali Haider", role: "Backend Developer" },
            { name: "Musfiraa Arif", role: "Figma Designer" },
            { name: "Sai Madhuri", role: "Frontend Developer" },
            { name: "Rohit Mishra", role: "Backend Developer" },
          ].map((member) => (
            <div
              key={member.name}
              className={`p-4 bg-[var(--home-bg)] bg-opacity-50 rounded-lg shadow-md 
                          hover:scale-110 transition-transform duration-300
                          cursor-pointer`}
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl w-full">
        <div className="bg-[var(--bg-three)] bg-opacity-80 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <GithubIcon className="w-8 h-8 mr-3 text-[var(--main-text)]" />
            <h2 className="text-2xl font-semibold">Contributing</h2>
          </div>
          <p>We welcome contributions! Visit our GitHub repository to:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Report issues</li>
            <li>Submit pull requests</li>
            <li>Suggest new features</li>
            <li>Help with documentation</li>
          </ul>
        </div>

        <div className="bg-[var(--bg-three)] bg-opacity-80 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <MailIcon className="w-8 h-8 mr-3 text-[var(--main-text)]" />
            <h2 className="text-2xl font-semibold">Contact</h2>
          </div>
          <p>For support or inquiries, reach out to us:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/ip-dropper"
                className="text-blue-500 hover:underline"
              >
                github.com/ip-dropper
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:support@ipdropper.com"
                className="text-blue-500 hover:underline"
              >
                support@ipdropper.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
