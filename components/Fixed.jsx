export default function Fixed({ ar = false }) {
  return (
    <>
      <div
        className="chatbot-icon dropup"
        style={{ direction: ar ? "rtl" : "ltr", right: "25px", bottom: "80px" }}
      >
        <a href="https://wa.me/+0555730488" target="_blank">
          <span className="hover-text">
            <img
              align="middel"
              src="/images/whatsApp-icon.jpg"
              width="40px"
              height="40px"
              alt="WhatsApp Icon"
              className="chat-icon"
              style={{ marginBottom: "5px" }}
            />
            <span className="alt"> {ar ? "تواصل معنا" : "Contact Us"}</span>
          </span>
        </a>
      </div>
      <div
        className="chatbot-icon dropup"
        style={{ direction: "ltr", left: "25px" }}
      >
        <a href="#top">
          <img
            src="/images/top.png"
            width="40px"
            height="40px"
            alt="WhatsApp Icon"
            className="chat-icon"
            style={{ marginBottom: "5px" }}
          />
        </a>
      </div>
      <div
        className="chatbot-icon dropup"
        style={{ direction: ar ? "rtl" : "ltr", right: "25px" }}
      >
        <a href="tel:+0555730488">
          <span className="hover-text2">
            <img
              src="/images/phone.jpg"
              width="40px"
              height="40px"
              alt="Call Icon"
              className="chat-icon"
            />
            <span className="alt2"> {ar ? "اتصل بنا" : "Call Us"}</span>
          </span>
        </a>
      </div>
    </>
  );
}
