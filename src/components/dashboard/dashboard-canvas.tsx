function DashboardCanvas() {
  return (
    <main className="p-6">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Section {i + 1}</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ))}
    </main>
  );
}

export default DashboardCanvas;
