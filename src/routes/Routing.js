import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import configRoute from "./configRoute";

export default function Routing(props) {
  const { setRefreshCheck } = props;
  return (
    <Router>
      <Routes>
        {map(configRoute, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.page setRefreshCheck={setRefreshCheck} />}
          />
        ))}
      </Routes>
    </Router>
  );
}
