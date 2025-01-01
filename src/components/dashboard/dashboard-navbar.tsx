function DashboardNavbar() {
  return (
    <nav className="p-4 pt-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="py-2 px-4 mb-2 rounded hover:bg-gray-100">
          Nav Item {i + 1}
        </div>
      ))}
    </nav>
  );
}

export default DashboardNavbar;
