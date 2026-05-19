import { Outlet, Link } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold tracking-tight">
              MyWebsite
            </Link>
            <nav className="flex space-x-8">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">Blog</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
