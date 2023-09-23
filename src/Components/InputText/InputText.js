import React from "react";
import "./InputText.css";

export default function InputText(props) {
  const { type, placeholder, name, id } = props;
  return (
    <div class="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        class="input"
      />
    </div>
  );
}
