import React, { useState } from "react";
import { Switch, Listbox } from "@headlessui/react";
import { useTheme } from "../context/ThemeProvider";

const refreshRates = ["1s", "5s", "10s", "30s"];
const deviceLimits = ["1", "3", "5", "10"];

const Settings = () => {
  const [autoConnect, setAutoConnect] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [selectedRefreshRate, setSelectedRefreshRate] = useState(
    refreshRates[0]
  );
  const [selectedDeviceLimit, setSelectedDeviceLimit] = useState(
    deviceLimits[0]
  );
  const { theme, setTheme } = useTheme();

  const handleSave = () => {
    const settingsData = {
      autoConnect,
      notifications,
      refreshRate: selectedRefreshRate,
      deviceLimit: selectedDeviceLimit,
      theme,
    };
    console.log("Settings saved:", settingsData);
  };

  return (
    <div className="min-h-screen text-[var(--main-text)] flex flex-col items-center p-6 bg-cover bg-center">
      <h1 className="text-2xl font-semibold pb-6">Settings</h1>
      <div className="w-full max-w-2xl bg-[var(--home-bg)] bg-opacity-50 p-6 rounded-lg space-y-8">
        {/* Theme Selection */}
        <div className="bg-[var(--settings)] p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Appearance</h2>
            <p className="text-sm text-[var(--small-text)]">
              Choose your preferred theme
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setTheme("dark")}
              className="px-4 py-2 bg-[var(--settings-mode)] rounded hover:bg-[var(--settings-hover)] hover:scale-105 transition-transform duration-300"
            >
              Dark
            </button>
            <button
              onClick={() => setTheme("light")}
              className="px-4 py-2 bg-[var(--settings-mode)] rounded hover:bg-[var(--settings-hover)] hover:scale-105 transition-transform duration-300"
            >
              Light
            </button>
            <button
              onClick={() => setTheme("system")}
              className="px-4 py-2 bg-[var(--settings-mode)] rounded hover:bg-[var(--settings-hover)] hover:scale-105 transition-transform duration-300"
            >
              System
            </button>
          </div>
        </div>

        {/* Connection Settings */}
        <div className="bg-[var(--settings)] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Auto-Connect Devices</span>
            <Switch
              checked={autoConnect}
              onChange={setAutoConnect}
              className={`${
                autoConnect ? "bg-green-500" : "bg-[var(--settings-mode)]"
              } relative inline-flex h-6 w-11 items-center rounded-full hover:scale-105 transition-transform duration-300`}
            >
              <span
                className={`${
                  autoConnect ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
          <hr className="border-gray-500 my-4" />
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold">Device Refresh Rate</label>
            <Listbox
              value={selectedRefreshRate}
              onChange={setSelectedRefreshRate}
            >
              <div className="relative">
                <Listbox.Button className="w-32 p-2 bg-[var(--settings-mode)] rounded ">
                  {selectedRefreshRate}
                </Listbox.Button>
                <Listbox.Options className="absolute bottom-full mb-1 w-32 bg-[var(--bg-three)] rounded shadow-lg">
                  {refreshRates.map((rate) => (
                    <Listbox.Option
                      key={rate}
                      value={rate}
                      className="p-2 cursor-pointer hover:bg-[var(--settings-mode)]"
                    >
                      {rate}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[var(--settings)] p-4 rounded-lg flex justify-between items-center">
          <span className="font-semibold">Enable Notifications</span>
          <Switch
            checked={notifications}
            onChange={setNotifications}
            className={`${
              notifications ? "bg-green-500" : "bg-[var(--settings-mode)]"
            } relative inline-flex h-6 w-11 items-center rounded-full hover:scale-105 transition-transform duration-300`}
          >
            <span
              className={`${
                notifications ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>

        {/* Device Limit */}
        <div className="bg-[var(--settings)] p-4 rounded-lg flex justify-between items-center">
          <label className="text-sm font-semibold">Device Limit</label>
          <Listbox
            value={selectedDeviceLimit}
            onChange={setSelectedDeviceLimit}
          >
            <div className="relative">
              <Listbox.Button className="w-32 p-2 bg-[var(--settings-mode)] rounded">
                {selectedDeviceLimit}
              </Listbox.Button>
              <Listbox.Options className="absolute bottom-full mb-1 w-32 bg-[var(--bg-three)] rounded shadow-lg">
                {deviceLimits.map((limit) => (
                  <Listbox.Option
                    key={limit}
                    value={limit}
                    className="p-2 cursor-pointer hover:bg-[var(--settings-mode)]"
                  >
                    {limit}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[var(--settings)] hover:bg-[var(--settings-mode)] rounded-lg text-[var(--main-text)] font-semibold hover:scale-105 transition-transform duration-300"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
