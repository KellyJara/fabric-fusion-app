"use client";

import UploadArea from "@/components/UploadArea";

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex space-x-8">
      
       
        <div className="flex-1 bg-white p-6 rounded-lg border-2 border-blue-500 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Upload Fabric</h1>
          <UploadArea />
        </div>

        
        <div className="flex-none w-1/4 bg-gray-200 p-4 rounded-lg border-2 border-gray-400">
          <h2 className="text-lg font-bold mb-4">Fabric Properties</h2>
          <p>Upload a fabric to see analysis</p>
        </div>
      </div>
    </div>
  );
}