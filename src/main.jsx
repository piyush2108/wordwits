import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import SideBanner from "./components/SideBanner";
import Body from "./components/Body";
import GameScreen from "./components/GameScreen";
import Title from "./components/Title";
import Footer from "./components/Footer";

import store from "./utils/store/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col sm:flex-row">
        <SideBanner />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Title />,
      },
      {
        path: "/play",
        element: <GameScreen />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
