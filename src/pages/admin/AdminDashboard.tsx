import { Users, FileText, Calendar, Download } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Downloads" value="1,248" icon={<Download className="w-6 h-6 text-blue-500" />} />
        <StatCard title="Blog Posts" value="12" icon={<FileText className="w-6 h-6 text-emerald-500" />} />
        <StatCard title="Team Members" value="5" icon={<Users className="w-6 h-6 text-purple-500" />} />
        <StatCard title="Upcoming Events" value="3" icon={<Calendar className="w-6 h-6 text-orange-500" />} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Post an Announcement</h3>
        <textarea 
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-slate-900 mb-4 h-32" 
          placeholder="Write your announcement here. It will be posted on the homepage like an advertisement..."
        />
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
          Publish Announcement
        </button>
      </div>
      
      <div className="bg-orange-50 text-orange-800 p-4 rounded-lg text-sm border border-orange-200">
        <strong>Security Notice:</strong> Right now, any data added here is not permanently saved because this is a static build. To make data and your password unhackable on GitHub Pages, we need to connect a database (like Firebase).
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
      <div className="p-3 bg-gray-50 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
