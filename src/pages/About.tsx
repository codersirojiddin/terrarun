export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">About Us</h1>
        <p className="mt-4 text-lg text-gray-500">
          We are a dedicated team building experiences that matter.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* We will map team members from DB here later */}
          <div className="bg-white border text-center border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
              {/* placeholder avatar */}
            </div>
            <h3 className="text-lg font-bold text-gray-900">Jane Doe</h3>
            <p className="text-sm font-medium text-indigo-600 mb-3">CEO & Founder</p>
            <p className="text-gray-500 text-sm">
              Jane loves building products that help people connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
