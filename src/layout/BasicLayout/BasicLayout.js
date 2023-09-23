import React from "react";
import "./BasicLayout.css";

export default function BasicLayout(props) {
  const { children } = props;
  return <div>{children}</div>;
}
