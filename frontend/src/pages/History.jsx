import React from "react";

const History = () => {
  return (
    <div className="flex flex-col items-center p-5 min-h-screen text-[var(--main-text)] bg-cover bg-center">
      <div className="flex justify-between items-center w-full max-w-5xl pb-5">
        <h1 className="text-2xl font-semibold text-center flex-grow">
          History
        </h1>
      </div>
      <div className=" w-full max-w-5xl pl-5 mt-12 text-xl text-left">
        No connection history found yet
      </div>
    </div>
  );
};

export default History;
