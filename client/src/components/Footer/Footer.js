import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <strong>
          Copyright © 2022
          <a href="/dashboard">&nbsp;Shopping</a>.
        </strong>
        &nbsp;All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    </div>
  );
};

export default Footer;
