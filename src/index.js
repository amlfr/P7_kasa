import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import aboutContent from "./assets/page-text/about.json";
import housings from "./assets/housing/housing.json";

const Layout = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    return housings;
                },
            },
            {
                path: "/housing",
                element: <Housing />,
            },
            {
                path: "/about",
                element: <About />,
                loader: async () => {
                    return aboutContent;
                },
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
