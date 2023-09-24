import React from "react";
import "./BasicLayout.css";
import { Container, Row, Col } from "react-bootstrap";
import LeftMenu from "../../Components/LeftMenu";

export default function BasicLayout(props) {
  const { className, children, setRefreshCheck } = props;
  return (
    <Container className={`basic-layout ${className}`}>
      <Row>
        <Col xs={3} className="basic-layout_menu">
          <LeftMenu setRefreshCheck={setRefreshCheck} />
        </Col>
        <Col xs={9} className="basic-layout_content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
