export default function StatsCard({
  title,
  value,
  icon,
  color,
  subtitle,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}