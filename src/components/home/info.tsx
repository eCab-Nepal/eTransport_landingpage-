function Info() {
  return (
    <section className="py-12">
      <div className="layout">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">
            Welcome to E-Transportation Service{" "}
          </p>
          <p className="text-neutral-400 text-sm">
            {" "}
            Your all-in-one solution for seamless vehicle services and
            transportation management.
          </p>

          <div className="mt-3 h-1 w-16 bg-success-main" />
        </div>

        <p className="mt-4">
          <strong>E-Transportation Service</strong> has an app called ETSNepal
          designed to enhance your driving experience. From locating essential
          services like petrol pumps, EV charging stations, parking spaces, and
          garages, to real-time navigation for the nearest available providers,
          we’re here to simplify your journey.
        </p>

        <p className="mt-2">
          For service providers, our <strong>ETSNepal Provider App</strong>{" "}
          streamlines vehicle service registration, helping you manage
          appointments, track maintenance, and deliver top-notch service to
          vehicle owners. Whether you’re a user or a provider, we ensure a
          smarter, smoother transportation experience for all.
        </p>

        <p className="mt-6 text-2xl font-bold">
          Navigate, Manage, and Thrive with ETS Nepal!
        </p>
      </div>
    </section>
  );
}

export default Info;
