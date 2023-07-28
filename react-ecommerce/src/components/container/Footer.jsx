import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="container footer">
      <p>
        Copyright 2023 &#169; inatentamente. Con ♥️ hecho por {" "}
        <a href="">Dani</a>
      </p>
      <div className="footer_socials">
        <BsInstagram />
        <BsFacebook />
        <BsTwitter />
      </div>
    </div>
  );
}
