"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  let lan = usePathname() == "/ar" ? "ar" : "en";
  return (
    <div
      dir={lan == "ar" ? "rtl" : "ltr"}
      className="navbar navbar-expand-lg navbar-light bg-logo"
      style={{ fontWeight: "bold" }}
    >
      <div className="container">
        <Link className="navbar-brand " href="/">
          <img
            src="/logo.jpg"
            style={{ width: "150px", borderRadius: "5%" }}
            alt="Logo"
            className="img-fluid logo-center-only mr-3"
          />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-gold" href="/Contact_Us">
              {lan != "ar" ? "Contact Us" : "تواصل معنا"}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-gold"
              href={lan == "en" ? "/ar" : "/"}
            >
              {lan == "ar" ? "English" : "العربية"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
