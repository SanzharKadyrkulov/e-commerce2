import { Route, RouteProps } from "react-router-dom";
import path from "path";
import React, { FC } from "react";
import BaseLayout from "../Layouts/BaseLayout/BaseLayout";

const BaseRoute: FC<RouteProps> = ({ path, element }) => {
  return <Route path={path} element={<BaseLayout>{element}</BaseLayout>} />;
};

export default BaseRoute;
