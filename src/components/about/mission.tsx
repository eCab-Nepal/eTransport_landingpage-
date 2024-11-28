function Mission() {
  return (
    <section className="pb-14">
      <div className="layout">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">Our Mission</p>

          <div className="mt-3 h-1 w-16 bg-success-main" />
        </div>
        <ul className="list-disc mt-4 ">
          <li>
            To empower users with real-time access to vital vehicle services.
          </li>

          <li>
            To support service providers with tools for managing and optimising
            their operations.
          </li>
          <li>
            To foster a connected and thriving transportation community in
            Nepal.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Mission;
