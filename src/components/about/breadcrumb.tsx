import Link from "next/link";

function BreadCrumb() {
  return (
    <section className="py-24 bg-success-secondary/80">
      <div className="layout text-center">
        <p className="text-4xl text-white font-bold">
          Trucking - Specialized Transportation Services
        </p>
        <div className="text-white mt-4 text-sm">
          You are here: <Link href={"/"}>Home</Link> /{" "}
          <Link href={"/about"} className="hover:text-blue-200">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
