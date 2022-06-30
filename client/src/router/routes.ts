import { lazy, LazyExoticComponent } from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyName from "../pages/MyName/MyName";
import Tasks from "../pages/Taks/Tasks";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// const TaskLazy = lazy(() => import("../pages/Taks/Tasks"));

// const DashboardLazy = lazy(() => import("../pages/Dashboard/Dashboard"));

export const routes: Route[] = [
  {
    path: "/tareas/*",
    to: "/tareas/",
    Component: Tasks,
    name: "tareas",
  },
  {
    to: "/estadisticas",
    path: "estadisticas",
    Component: Dashboard,
    name: "estadisticas",
  },
  {
    to: "/mi-nombre",
    path: "mi-nombre",
    Component: MyName,
    name: "mi-nombre",
  }

];
