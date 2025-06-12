// dashboard/layout.jsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav className="flex flex-col space-y-4">
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/dashboard/listings" className="hover:underline">Listings</a>
        </nav>
      </aside> */}

      {/* Page content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
