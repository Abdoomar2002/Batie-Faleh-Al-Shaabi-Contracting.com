"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  let ar = usePathname();
  const lan = ar == "/ar" ? "ar" : "en";
  return (
    <footer
      className="text-light"
      style={{ backgroundColor: "#5f6063", height: "300px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <h5> {lan == "ar" ? "تواصل معنا" : "Contact Us"}</h5>
            <p>
              المدينة المنورة– طريق الرياض السريع مخطط البدراني شارع الأمير مقرن
              بن عبدالعزيز
            </p>
            <Link href="tel:+0555730488" style={{ color: "white" }}>
              <p>الجوال 0555730488+</p>
            </Link>
            <Link href="tel:+0505301951" style={{ color: "white" }}>
              <p>الجوال 0505301951+</p>
            </Link>
          </div>
          <div className="col-md-4 p-2">
            <h5>ايميليلات التواصل</h5>
            <p>alshaabi.co@gmail.com</p>
            <Link href="ar-contact.php">
              <button className="btn btn-light">ارسال بريد الكتروني</button>
            </Link>
          </div>
          <div className="col-md-4 p-2">
            <h5>تواصل معنا عبر</h5>
            <Link
              href="https://www.facebook.com/"
              className=" m-2"
              style={{ color: "" }}
            >
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link href="tel:+0555730488" className="text-light m-2">
              <i
                className="fas fa-phone mb-2"
                style={{ color: "", fontSize: "23px" }}
              ></i>
            </Link>
            <Link href="https://wa.me/+0555730488" className="text-light m-2">
              <i className="fab fa-whatsapp fa-2x" style={{ color: "" }}></i>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              &copy; 2024 - جميع الحقوق محفوظة{" "}
              <Link href="/" className="text-white text-decoration-none">
                Batie Faleh Al- Shaabi Contracting Company
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
