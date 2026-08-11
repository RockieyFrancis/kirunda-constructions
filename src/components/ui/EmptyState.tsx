export default function EmptyState({
  title,
  message
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="border border-dashed border-line py-16 px-6 text-center">
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-steel text-sm max-w-md mx-auto">{message}</p>
    </div>
  );
}
