import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen text-[var(--main-text)] px-6 py-10 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 w-full overflow-auto bg-cover bg-center"
    >
      {/* Main Content Section */}
      <div className="max-w-6xl text-center w-full bg-[var(--home-bg)] bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Welcome to IP Dropper
        </h1>
        <p className="text-base sm:text-lg  leading-relaxed max-w-3xl mx-auto">
          IP Dropper is a modern, cross-platform tool designed to simplify
          device management and IP address tracking across your network.
        </p>

        {/* Features Section */}
        <div className="mt-10 text-left w-full max-w-4xl mx-auto bg-[var(--bg-three)] bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            Features
          </h2>
          <ul className="space-y-3 ">
            <li>
              <span className="font-semibold text-[var(--main-text)]">
                Device Management:
              </span>{" "}
              Easily add and manage network devices
            </li>
            <li>
              <span className="font-semibold text-[var(--main-text)]">
                Real-time Status:
              </span>{" "}
              Monitor device connectivity status
            </li>
            <li>
              <span className="font-semibold text-[var(--main-text)]">
                Cross-platform Support:
              </span>{" "}
              Works on Windows, macOS, and Linux
            </li>
            <li>
              <span className="font-semibold text-[var(--main-text)]">
                Secure Communication:
              </span>{" "}
              End-to-end encrypted data transfer
            </li>
            <li>
              <span className="font-semibold text-[var(--main-text)]">
                History Tracking:
              </span>{" "}
              Keep track of all connections and transfers
            </li>
          </ul>
        </div>

        {/* Getting Started Section */}
        <div className="mt-10 text-left w-full max-w-4xl mx-auto bg-[var(--bg-three)] bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            Getting Started
          </h2>
          <ol className="list-decimal list-inside space-y-3 ">
            <li>Add your devices using the "Devices" tab</li>
            <li>Enable receiving mode using the button in the sidebar</li>
            <li>Start monitoring your network!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
