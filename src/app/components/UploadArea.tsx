"use client";

import { useState } from "react";
import { uploadFabric } from "@/utils/api";
import Spinner from "./Spinner";

interface UploadAreaProps {
  onResult: (result: any) => void;
}

export default function UploadArea({ onResult }: UploadAreaProps) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      try {
        const result = await uploadFabric(file);
        console.log(result);
        onResult(result);  // Pasamos el resultado al padre
      } catch (error) {
        console.error("Error uploading fabric:", error);
        alert("Failed to upload fabric.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center hover:bg-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out">
      <input type="file" onChange={handleUpload} className="mb-4" />
      {loading && <Spinner />}
    </div>
  );
}