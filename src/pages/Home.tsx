export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
          Welcome to <span className="text-indigo-600">Our App</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We build amazing tools to help you achieve your goals faster and better.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg px-10 transition-colors">
              Download App
            </button>
          </div>
        </div>
      </div>

      {/* Announcements Section placeholder */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12 rounded-r-lg max-w-3xl mx-auto hidden">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Admin Announcements will show up here.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center mb-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We will populate this from the database later */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-sm text-indigo-600 font-semibold mb-2">MAR 24, 2026</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Annual Meetup</h3>
            <p className="text-gray-500 text-sm">Join us for our yearly gathering of tech enthusiasts.</p>
          </div>
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-6 flex items-center justify-center text-gray-400 text-sm">
            Event slots managed by Admin
          </div>
        </div>
      </div>
    </div>
  );
}
