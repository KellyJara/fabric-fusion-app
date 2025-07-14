"use client";

export default function DesignPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex space-x-8">
       
        <div className="flex-1 border p-6 rounded-lg hover:border-blue-300">
          <h1 className="text-2xl font-bold mb-4">Base Template</h1>
          
        </div>

       
        <div className="flex-1 border p-6 rounded-lg hover:border-blue-300">
          <h1 className="text-2xl font-bold mb-4">Blended Design</h1>
         
        </div>
      </div>
    </div>
  );
}