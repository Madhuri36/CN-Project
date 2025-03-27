import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Send,
  Clock,
  Settings,
  User,
  Info,
  TabletSmartphone,
  Network,
} from "lucide-react";

const UserPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--bg-two)] rounded-lg shadow-xl w-96 h-96 relative">
        <button
          className="absolute top-4 right-4 text-[var(--main-text)] hover:bg-[var(--bg-three)] rounded-full p-2"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isReceiving, setIsReceiving] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Devices", path: "/devices", icon: TabletSmartphone },
    { name: "Received", path: "/received", icon: Send },
    { name: "History", path: "/history", icon: Clock },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "About", path: "/about", icon: Info },
  ];

  const handleUserClick = () => {
    if (isOpen) {
      setIsUserPopupOpen(true);
    }
  };

  return (
    <div className="flex relative">
      <div
        className={`bg-[var(--bg-color-navbar)] text-[var(--main-text)] h-screen p-5 flex flex-col justify-between transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-[var(--bg-three)] pb-3">
            {isOpen && (
              <div className="flex items-center space-x-2">
                <Network size={24} />
                <h1 className="text-xl font-bold transition-all duration-300">
                  IP Dropper
                </h1>
              </div>
            )}
            <button
              className="text-[var(--main-text)] p-2 flex items-center justify-center rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <button
            className={`mt-5 px-4 py-2 rounded text-[var(--main-text)] w-full hover:scale-105 transition-transform duration-300 ${
              isReceiving ? "bg-[var(--green-button)]" : "bg-[var(--bg-two)]"
            } ${!isOpen && "hidden"}`}
            onClick={() => setIsReceiving(!isReceiving)}
          >
            Receiving
          </button>

          {/* Navigation Menu */}
          <nav className="mt-5 flex flex-col items-center space-y-4">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-2 py-2 rounded w-full hover:bg-[var(--bg-three)] hover:scale-105 transition-transform duration-300 ${
                    isActive ? "bg-[var(--bg-three)]" : ""
                  }`
                }
              >
                <div className="flex justify-center w-6">
                  <item.icon size={24} />
                </div>
                <span className={`${!isOpen && "hidden"}`}>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* User Section */}
        <div
          className={`flex items-center space-x-3 mt-auto p-4 border-t border-[var(--bg-three)] cursor-pointer ${
            !isOpen ? "justify-center" : ""
          }`}
          onClick={handleUserClick}
        >
          <div className="flex justify-center w-6">
            <User size={24} />
          </div>
          {isOpen && (
            <div className="flex-grow">
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs text-[var(--small-text)]">192.168.1.1</p>
            </div>
          )}
        </div>
      </div>

      <UserPopup
        isOpen={isUserPopupOpen}
        onClose={() => setIsUserPopupOpen(false)}
      />
    </div>
  );
};

export default Navbar;
