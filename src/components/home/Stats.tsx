// Static "by the numbers" bar. Edit these four values directly to update the site.
const ITEMS = [
  { value: '24/7', label: 'Always Available' },
  { value: '7+', label: 'Regions Covered' },
  { value: '100%', label: 'Client-Focused' },
  { value: 'EA', label: 'Uganda & East Africa' }
];

export default function Stats() {
  return (
    <div className="bg-navy-deep border-t border-gold/20">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`text-center py-9 px-6 border-b lg:border-b-0 border-gold/15 ${
              i < ITEMS.length - 1 ? 'lg:border-r' : ''
            }`}
          >
            <div className="font-mono text-[34px] font-semibold text-gold">{item.value}</div>
            <div className="text-[12.5px] text-white/60 mt-1.5">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
