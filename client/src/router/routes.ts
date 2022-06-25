import { lazy, LazyExoticComponent } from "react";
import Dashboard from "../pages/Dashboard/Dashboard";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../pages/Taks/Tasks"));

export const routes: Route[] = [
  {
    path: "/tareas/*",
    to: "/tareas/",
    Component: LazyLayout,
    name: "tareas",
  },
  {
    to: "/estadisticas",
    path: "estadisticas",
    Component: Dashboard,
    name: "estadisticas",
  },

];
