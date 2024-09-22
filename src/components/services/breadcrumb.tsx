import Link from "next/link";

function BreadCumb() {
  return (
    <section className="py-24 bg-success-secondary/80">
      <div className="layout text-center">
        <p className="text-4xl text-white font-bold">
          Trucking - Global Logistics Solutions
        </p>
        <div className="text-white mt-4 text-sm">
          You are here:{" "}
          <Link href={"/"} className="hover:text-blue-200">
            Home
          </Link>{" "}
          /{" "}
          <Link href={"/services"} className="hover:text-blue-200">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BreadCumb;
