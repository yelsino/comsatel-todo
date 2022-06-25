import React from "react";

export const MyActivity = () => {
  return (
    <div className="col-span-2  rounded-full p-5 flex font-poppins gap-x-5 items-center bg-primary-100">
      <div className="flex flex-col items-center text-secondary-200 font-bold text-xs">
        <span>My</span>
        <span>Activity</span>
      </div>
      <div className="flex gap-x-3 text-xs">
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span className="text-text-100">lu</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span  className="text-text-100">ma</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span  className="text-text-100">mi</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span  className="text-text-100">ju</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span  className="text-text-100">vi</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span  className="text-text-100">sa</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block bg-secondary-100 w-3 h-10 rounded-full" />
          <span  className="text-text-100">do</span>
        </div>
      </div>
    </div>
  );
};
