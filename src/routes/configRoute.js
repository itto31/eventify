import Home from "../pages/Home";
import Eventos from "../pages/Eventos";
const routes = [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "/eventos",
    exact: true,
    page: Eventos,
  },
];

export default routes;
