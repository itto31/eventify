import React from "react";
import BasicLayout from "../../layout/BasicLayout";
import "./Eventos.css";

export default function Eventos(props) {
  const { setRefreshCheck } = props;

  return (
    <BasicLayout ClassName="Home" setRefreshCheck={setRefreshCheck}>
      <div className="home_title mt-5">
        <h2>Eventos</h2>
      </div>
      <p>Lista de eventos</p>
    </BasicLayout>
  );
}
