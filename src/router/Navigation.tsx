import { Suspense } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<p>cargando...</p>}>
      <BrowserRouter>
        <div className="max-w-sm mx-auto p-10  w-full  sm:h-[calc(100vh-100px)] sm:rounded-3xl flex flex-col gap-y-7 relative bg-primary bg-primary-200 ">
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[1].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
