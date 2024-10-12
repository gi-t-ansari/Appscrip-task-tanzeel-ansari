import React, { useState } from "react";
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { PAYMENT_IMAGES } from "../../config";
import { MetaMuseLists, QuickLinkList } from "../Lists";
import { Accordion } from "../Accordion";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  return (
    <footer className="footer-container">
      <section className="footer-sub-container">
        <div>
          <h5>be the first to know</h5>
          <p>Sign up for updates from mettā muse.</p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <button disabled={!emailInput}>subscribe</button>
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
        <div className="mobile-hidden">
          <h5>mettā muse</h5>
          <MetaMuseLists />
        </div>
        <div className="mobile-hidden">
          <h5>quick links</h5>
          <QuickLinkList />
        </div>
        <div className="mobile-visible">
          <Accordion title={"mettā muse"}>
            <MetaMuseLists />
          </Accordion>
          <Accordion title={"quick links"}>
            <QuickLinkList />
          </Accordion>
        </div>
        <div>
          <h5>follow us</h5>
          <div>
            <CiInstagram size={30} />
            <CiLinkedin size={30} />
          </div>
          <h5>mettā muse Accepts</h5>
          <div className="payments-container">
            {PAYMENT_IMAGES.map((item, i) => (
              <img width={56} key={i} src={item?.image} alt={item?.name} />
            ))}
          </div>
        </div>
      </section>
      <section className="footer-sub-container">
        <p>
          Copyright © 2024 mettamuse. All rights reserved. Developed by Tanzeel
          Ansari.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
