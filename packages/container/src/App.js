import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashBoardApp = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/dashboard" component={DashBoardApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
