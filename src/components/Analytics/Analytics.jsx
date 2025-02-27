import { useState, useEffect } from "react";
import { BarChart, Eye, UserCheck } from "lucide-react";

export default function Analytics() {
  const [stats, setStats] = useState({
    applications: 0,
    views: 0,
    hired: 0,
  });

  // Simulate API Call
  useEffect(() => {
    // Replace this with actual API fetch
    setTimeout(() => {
      setStats({
        applications: 120,
        views: 450,
        hired: 15,
      });
    }, 1000);
  }, []);

  const analyticsData = [
    {
      label: "Total Applications",
      value: stats.applications,
      icon: <BarChart size={28} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      label: "Total Views",
      value: stats.views,
      icon: <Eye size={28} />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      label: "Hired Candidates",
      value: stats.hired,
      icon: <UserCheck size={28} />,
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {analyticsData.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-white shadow-md rounded-xl p-5 border border-gray-200 transition-all hover:shadow-lg"
        >
          <div className={`p-3 rounded-full ${item.color}`}>{item.icon}</div>
          <div className="ml-4">
            <h3 className="text-gray-600 text-sm">{item.label}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
