"use client";

import { useState } from "react";
import { uploadFabric } from "@/utils/api";
import Spinner from "./Spinner";

export default function UploadArea() {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      const result = await uploadFabric(file);
      console.log(result);
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center hover:bg-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out">
      <input type="file" onChange={handleUpload} className="mb-4" />
      {loading && <Spinner />}
    </div>
  );
}