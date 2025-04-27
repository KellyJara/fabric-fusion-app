export const uploadFabric = async (file: File) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: file.name,
          url: URL.createObjectURL(file),
          properties: {
            color: "Blue",
            texture: "Soft Cotton",
            pattern: "Plain",
          }
        });
      }, 1500);
    });
  }
