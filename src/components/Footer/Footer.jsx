import React from "react";
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { PAYMENT_IMAGES } from "../../config";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-sub-container">
        <div>
          <h5>be the first to know</h5>
          <p>Sign up for updates from mettā muse.</p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input type="email" placeholder="Enter your email..." />
            <button>subscribe</button>
          </div>
        </div>
        <div>
          <h5>contact us</h5>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h5>currency</h5>
          <div></div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </section>
      <section className="footer-sub-container">
        <div>
          <h5>mettā muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact US</li>
            <li>EU Compliance Doc</li>
          </ul>
        </div>
        <div>
          <h5>quick links</h5>
          <ul>
            <li>Order & Shipping</li>
            <li>Join/Login as as Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h5>follow us</h5>
          <div>
            <CiInstagram />
            <CiLinkedin />
          </div>
          <h5>mettā muse Accepts</h5>
          <div>
            {PAYMENT_IMAGES.map((item, i) => (
              <img width={56} key={i} src={item?.image} alt={item?.name} />
            ))}
          </div>
        </div>
      </section>
      <section className="footer-sub-container">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
