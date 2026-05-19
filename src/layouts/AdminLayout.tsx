import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogOut, LayoutDashboard, Settings } from 'lucide-react';

export function AdminLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/iamadmin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Settings className="w-5 h-5" /> Admin Panel
          </h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/iamadmin" className="flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg text-sm font-medium text-slate-100">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          {/* Add more links here later */}
        </nav>
        <div className="p-4">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white px-8 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
        </header>
        <div className="p-8 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
