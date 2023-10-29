import React from "react";
import Hero from "./Hero";
import Blog from "./Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Article";

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
                        </>
                    }
                />
                <Route path="/article/:id" element={<Article />} />
            </Routes>
        </BrowserRouter>
    );
}
