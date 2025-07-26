export const uploadFabric = async (file: File) => {
  const formData = new FormData();
  formData.append("images", file);

  const response = await fetch("/api/analyze_fabrics", {  // Nota la URL relativa con /api
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error uploading fabric");
  }

  return response.json();
};