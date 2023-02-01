import React from "react";
import ReactDOM from "react-dom/client";
/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

/* LOADER TEST TO DELETE */
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
                /*LOADER TEST TO DELETE */
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

/* root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/housing" element={<Housing />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
); */
