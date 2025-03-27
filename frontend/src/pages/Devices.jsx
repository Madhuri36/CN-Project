import React, { useState, useEffect } from "react";
import {
  FaEdit,
  FaTrash,
  FaUpload,
  FaWindows,
  FaApple,
  FaLinux,
} from "react-icons/fa";

const Devices = () => {
  const [devices, setDevices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editDevice, setEditDevice] = useState(null);
  const [newDevice, setNewDevice] = useState({
    name: "",
    ip: "",
    type: "windows",
  });

  useEffect(() => {
    const storedDevices = JSON.parse(localStorage.getItem("devices")) || [];
    setDevices(storedDevices);
  }, []);

  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(devices));
  }, [devices]);

  const handleEdit = (device) => {
    setEditDevice(device);
    setNewDevice(device);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updatedDevices = devices.filter((device) => device.id !== id);
    setDevices(updatedDevices);
  };

  const handleSaveDevice = () => {
    if (editDevice) {
      setDevices(
        devices.map((device) =>
          device.id === editDevice.id ? newDevice : device
        )
      );
    } else {
      setDevices([
        ...devices,
        { id: Date.now(), ...newDevice, status: "offline" },
      ]);
    }
    setShowForm(false);
    setEditDevice(null);
    setNewDevice({ name: "", ip: "", type: "windows" });
  };

  const getDeviceIcon = (type) => {
    switch (type) {
      case "windows":
        return <FaWindows className="text-[var(--main-text)] text-3xl" />;
      case "mac":
        return <FaApple className="text-[var(--main-text)] text-3xl" />;
      case "linux":
        return <FaLinux className="text-[var(--main-text)] text-3xl" />;
      default:
        return <FaWindows className="text-[var(--main-text)] text-3xl" />;
    }
  };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen text-[var(--main-text)] bg-cover bg-center">
      <div className="flex justify-between items-center w-full max-w-5xl pb-5">
        <h1 className="text-2xl font-semibold text-center flex-grow">
          Devices
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="ml-auto bg-[var(--add-device)] px-4 py-2 rounded hover:bg-[var(--bg-two)] hover:scale-105 transition-transform duration-300"
        >
          Add Device
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-5">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between bg-[var(--bg-three)] p-4 rounded-lg relative hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {getDeviceIcon(device.type)}
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                      device.status === "online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </div>
                <div>
                  <p className="text-lg">{device.name}</p>
                  <p className="text-sm text-[var(--small-text)]">
                    {device.ip}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(device)}
                  className="text-[var(--small-text)] hover:scale-105 transition-transform duration-300"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(device.id)}
                  className="text-red-500 hover:scale-105 transition-transform duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* File Upload Box */}
        <div className="w-full md:w-1/3 bg-[var(--bg-three)] p-5 rounded-lg flex flex-col items-center overflow-hidden md:min-w-[250px]">
          <FaUpload className="text-4xl mb-3 text-gray-400" />
          <input
            type="file"
            className="mb-3 text-[var(--main-text)] w-full max-w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            multiple
          />
          <button className="bg-[var(--green-button)] px-4 py-2 rounded hover:bg-[var(--green-buttonhover)] hover:scale-105 transition-transform duration-300">
            Send Files
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-[var(--bg-one)] p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg mb-4">
              {editDevice ? "Edit Device" : "Add New Device"}
            </h2>
            <input
              type="text"
              placeholder="Device Name"
              className="w-full p-2 mb-2 bg-[var(--add-edit)] text-[var(--main-text)] rounded"
              value={newDevice.name}
              onChange={(e) =>
                setNewDevice({ ...newDevice, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="IP Address"
              className="w-full p-2 mb-2 bg-[var(--add-edit)] text-[var(--main-text)] rounded"
              value={newDevice.ip}
              onChange={(e) =>
                setNewDevice({ ...newDevice, ip: e.target.value })
              }
            />
            <select
              className="w-full p-2 mb-4 bg-[var(--add-edit)] text-[var(--main-text)] rounded"
              value={newDevice.type}
              onChange={(e) =>
                setNewDevice({ ...newDevice, type: e.target.value })
              }
            >
              <option value="windows">Windows</option>
              <option value="mac">Mac</option>
              <option value="linux">Linux</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-red-600 text-[var(--main-text)] rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveDevice}
                className="px-4 py-2 bg-[var(--green-button)] text-[var(--main-text)] rounded hover:bg-[var(--green-buttonhover)]"
              >
                {editDevice ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Devices;
