function Services() {
  return (
    <section className="pt-14">
      <div className="layout">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">Our Services</p>

          <div className="mt-3 h-1 w-16 bg-success-main" />
        </div>
        <div className="mt-4">
          <p className="font-semibold text-2xl">For Vehicle Owners:</p>

          <ul className="list-disc text-sm text-neutral-600">
            <li className="mt-1">
              <strong>Locate Essential Services:</strong> Easily find petrol
              pumps, EV charging stations, parking spaces, and garages.
            </li>
            <li>
              <strong>Real-Time Navigation:</strong> Get step-by-step directions
              to the nearest service provider.
            </li>

            <li>
              <strong>Appointment Management:</strong> Schedule and track your
              vehicle service appointments directly from the app.
            </li>
            <li>
              <strong>Service History:</strong> Keep all records of vehicle
              maintenance and repairs in one place.
            </li>
          </ul>
        </div>

        <div className="mt-4 ">
          <p className="font-semibold text-2xl">For Service Providers:</p>

          <ul className="list-disc text-sm text-neutral-600">
            <li className="mt-1">
              <strong>Streamlined Registration:</strong> Simplify vehicle
              service registration and manage client appointments effortlessly.
            </li>
            <li>
              <strong>Service Tracking:</strong> Organise, track, and handle all
              aspects of vehicle maintenance.
            </li>
            <li>
              <strong>Customer Management:</strong> Enhance customer
              satisfaction by offering timely, efficient service.
            </li>
            <li>
              <strong>Comprehensive Dashboard:</strong> Monitor operations,
              manage schedules, and optimize your business performance.
            </li>
          </ul>
          <p className="mt-4  text-sm text-neutral-600">
            Whether you&apos;re an individual user or a service provider, ETS
            Nepal has everything you need to simplify transportation and vehicle
            management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
