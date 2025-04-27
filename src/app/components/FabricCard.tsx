export default function FabricCard({ name, img }: { name: string, img: string }) {
    return (
      <div className="p-2 border rounded-lg shadow fusion">
        <img src={img} alt={name} className="rounded-md w-full h-32 object-cover" />
        <p className="mt-2 text-center">{name}</p>
      </div>
    );
  }