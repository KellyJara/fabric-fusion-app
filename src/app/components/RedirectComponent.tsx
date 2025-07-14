import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectComponent = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a /home cuando el componente se monte
    router.push("/home");
  }, [router]);

  return (
    <div>
      <p>Redirigiendo...</p>
    </div>
  );
};

export default RedirectComponent;