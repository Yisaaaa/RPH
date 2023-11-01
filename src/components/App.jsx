import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./Hero";
import Blog from "./Blog";
import Article from "./Article";
import Footer from "./Footer";

import "../css/index.css";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Blog />
                            <Footer />
                        </>
                    }
                />
                <Route path="/article/:id" element={<Article />} />
            </Routes>
        </BrowserRouter>
    );
}
