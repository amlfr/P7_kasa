/* Importing the react and react router tools */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Importing css sheet */

import GlobalStyle from "./globalStyle";

/* Importing the pages */

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

/* Importing footer component */
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
);
