import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    opacity: 0.7,
    display: "block",
    marginBottom: "5px",
  };

  return (
    <div
      className="container text-center mb-5 pb-5"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="row pt-5">
        <div className="col-4 pt-5">
          <img src="/images/logo.svg" alt="logo" style={{ width: "50%" }} />
          <p className="fs-10 mt-1">&copy;2010-2024</p>
          <p>Not Zerodha Broking Ltd.</p>
          <p>All rights reserved</p>
          <div className="text-start">
            <Link>
              <i
                className="fa-brands fa-twitter"
                style={{ marginLeft: "6rem", color: "#454545" }}
              ></i>
            </Link>
            <Link>
              <i
                className="fa-brands fa-facebook"
                style={{ marginLeft: "0.8rem", color: "#454545" }}
              ></i>
            </Link>
            <Link>
              <i
                className="fa-brands fa-instagram"
                style={{ marginLeft: "0.8rem", color: "#454545" }}
              ></i>
            </Link>
            <Link>
              <i
                className="fa-brands fa-linkedin"
                style={{ marginLeft: "0.8rem", color: "#454545" }}
              ></i>
            </Link>
            <Link>
              <i
                className="fa-brands fa-telegram"
                style={{ marginLeft: "0.8rem", color: "#454545" }}
              ></i>
            </Link>
          </div>
        </div>
        <div className="col-4 pt-5 text-start">
          <p className="fs-6" style={{ opacity: 0.8, fontWeight: "600" }}>
            Company
          </p>
          <Link to="/about" style={linkStyle} className="pt-2">
            About
          </Link>
          <Link to="/products" style={linkStyle} className="pt-2">
            Products
          </Link>
          <Link to="/pricing" style={linkStyle} className="pt-2">
            Pricing
          </Link>
          <Link to="/referral" style={linkStyle} className="pt-2">
            Referral Programs
          </Link>
          <Link to="/careers" style={linkStyle} className="pt-2">
            Careers
          </Link>
          <Link to="/tech" style={linkStyle} className="pt-2">
            Zerodha Tech
          </Link>
          <Link to="/press" style={linkStyle} className="pt-2">
            Press and Media
          </Link>
          <Link to="/csr" style={linkStyle} className="pt-2">
            Zerodha Cares (CSR)
          </Link>
        </div>
        <div className="col pt-5 text-start">
          <h4 className="fs-6" style={{ opacity: 0.8, fontWeight: "600" }}>
            Support
          </h4>
          <Link style={linkStyle}>Contact</Link>
          <Link style={linkStyle}>Support Portal</Link>
          <Link style={linkStyle}>Z-Connect Blog</Link>
          <Link style={linkStyle}>List of Charges</Link>
          <Link style={linkStyle}>Downloads and Resources</Link>
        </div>
        <div className="col pt-5 text-start">
          <h4 className="fs-6" style={{ opacity: 0.8 }}>
            Account
          </h4>
          <Link to="/about" style={linkStyle} className="pt-2">
            Open an Account
          </Link>
          <Link to="/about" style={linkStyle} className="pt-2">
            Fund Transfer
          </Link>
          <Link to="/about" style={linkStyle} className="pt-2">
            60-Day Challenge
          </Link>
        </div>
      </div>
      <div className="text-start mt-5" style={{ color: "#555555" }}>
        Zerodha is a pioneering fintech company that revolutionized the Indian
        financial landscape. Founded in 2010, Zerodha's mission is to make
        investing accessible, affordable, and transparent for all. With its
        cutting-edge technology and customer-centric approach, Zerodha has
        become India's largest brokerage firm, serving over 5 million clients.
        Zerodha's innovative platforms, including Kite and Coin, offer seamless
        trading experiences, while its educational initiatives, such as Varsity
        and TradingQ&A, empower investors with knowledge. Zerodha's commitment
        to transparency and minimal costs has disrupted the traditional
        brokerage model, making it an industry leader.
        <div className="mt-3">
          With a focus on innovation, Zerodha continues to expand its offerings,
          including mutual funds, bonds, and IPOs. Its impact on the Indian
          financial ecosystem is undeniable, making investing easier, more
          efficient, and more inclusive.
        </div>
        <div className="mt-3">
          Join the Zerodha community today and experience the future of
          investing. At Zerodha, innovation meets simplicity. Our intuitive
          platforms and tools are designed to make investing effortless, even
          for beginners. With features like paper trading, advanced charting,
          and real-time analytics, you'll be equipped to make informed
          decisions. Our dedication to transparency extends to our pricing
          model, with zero brokerage fees for equity delivery trades and
          competitive rates for other segments. Say goodbye to hidden costs and
          hello to more savings. But it's not just about technology and pricing
          – it's about people. Our customer support team is always ready to
          assist, and our active community forums foster a culture of learning
          and sharing. As a Zerodha client, you'll be part of a movement that's
          changing the face of Indian finance. Join us in our mission to
          democratize investing and take control of your financial future. Open
          an account today and experience the Zerodha difference!
        </div>
      </div>
    </div>
  );
};
