import Link from "next/link";

function BreadCrumb() {
  return (
    <section className="py-24 bg-success-secondary/80">
      <div className="layout text-center">
        <p className="text-4xl text-white font-bold">Contact us</p>
        <div className="text-white mt-4 text-sm">
          You are here:{" "}
          <Link className="hover:text-blue-200" href="/">
            Home
          </Link>{" "}
          /{" "}
          <Link className="hover:text-blue-200" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
