import {
  CopyrightOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import React from "react";
import useWindowSize from "./../customHook/useWindowSize";
import "./style.css";
import gPayIcon from "./../../images/gPay.png";
import masterCard from "./../../images/masterCard.png";
import americanExpress from "./../../images/americanExpress.png";
import applePay from "./../../images/applePay.png";
import payPal from "./../../images/payPal.png";

const Footer = () => {
  const windowSize = useWindowSize();

  return (
    <div className="row m-0 foot mobile-margin">
      <div className={`${windowSize > 600 ? "col-10" : "col-12"} mx-auto`}>
        <div className="row mt-5">
          <div className="col-md-8 col-sm-12">
            <strong>
              <h4>BE THE FIRST TO KNOW</h4>
            </strong>
            <div className="mt-3">Sign up for the update from met mussa</div>
            <div className="d-flex mt-5">
              <Input
                className="w-50 bg-white email-input"
                placeholder="Enter your email..."
                variant="borderless"
              />
              <Button className="bg-black text-white">
                <strong>Subscribe</strong>
              </Button>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mobile-margin">
            <strong>
              <h4>CONTACT US</h4>
            </strong>
            <div className="mt-2">+91 123456789</div>
            <div className="mt-2">customer@help.us.com</div>
            <div className="mt-2">CURRENCY : USD</div>
            <div className="mt-2">Transaction would be completed in Euros</div>
          </div>
          <Divider className="foot-divier" />
          <div className="col-md-3 col-sm-12">
            <strong>
              <h4>Metta Muse</h4>
            </strong>
            <div className="mt-3">About Us</div>
            <div className="mt-3">Stories</div>
            <div className="mt-3">Artisans</div>
            <div className="mt-3">Boutiques</div>
            <div className="mt-3">Contact Us</div>
          </div>
          <div className="col-md-5 col-sm-12 mobile-margin">
            <strong>
              <h4>QUICK LINKS</h4>
            </strong>
            <div className="mt-3">Order and shipping</div>
            <div className="mt-3">Join/Login as a seller</div>
            <div className="mt-3">Payment and pricing</div>
            <div className="mt-3">Return and refunds</div>
            <div className="mt-3">FAQs</div>
          </div>
          <div className="col-md-4 col-sm-12 mobile-margin">
            <strong>
              <h4>Follow Us</h4>
            </strong>
            <div>
              <InstagramOutlined className="socail-icons" />
              <LinkedinOutlined className="socail-icons mx-2" />
            </div>
            <div className="mt-5">metta muse ACCEPTS</div>
            <div className="mt-2">
              {" "}
              <img
                src={gPayIcon}
                alt="gPayIcon"
                width={50}
                height={40}
                className="payment-icons"
              />
              <img
                src={masterCard}
                alt="masterCard"
                width={50}
                height={40}
                className="payment-icons mx-2"
              />
              <img
                src={americanExpress}
                alt="americanExpress"
                width={50}
                height={40}
                className="payment-icons mx-2"
              />
              <img
                src={applePay}
                alt="applePay"
                width={50}
                height={40}
                className="payment-icons mx-2"
              />
              <img
                src={payPal}
                alt="payPal"
                width={50}
                height={40}
                className="payment-icons mx-2"
              />
            </div>
          </div>
          <div className="text-center mt-5 mb-3">
            Copyright <CopyrightOutlined /> 2024 mettamusse. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
