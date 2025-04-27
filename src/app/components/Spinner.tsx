import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
