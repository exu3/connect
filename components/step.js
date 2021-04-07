export default function Step({ action, icon }) {
  return (
    <div className="flex flex-row mb-7 space-x-4">
      <img src={icon} alt={action} className="h-16 w-16" />
      <p className="font-montserrat text-2xl">{action}</p>
    </div>
  );
}
