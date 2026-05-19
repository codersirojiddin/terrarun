export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Latest Updates</h1>
        <p className="mt-4 text-lg text-gray-500">
          Read our latest news, product updates, and stories.
        </p>
      </div>

      <div className="grid gap-8 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
        {/* Placeholder blog post */}
        <div className="flex flex-col rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0 h-48 bg-gray-200">
            {/* Image Placeholder */}
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                Product Update
              </p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">Welcome to our new app</p>
                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                  We're excited to announce the launch of our brand new platform featuring advanced administration tools.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <span className="sr-only">Admin</span>
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">A</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Site Admin
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2026-05-19">May 19, 2026</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
