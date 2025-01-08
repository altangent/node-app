import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppNav } from "../components/AppNav";
import { HomeScene } from "./HomeScene";
import { AboutScene } from "./AboutScene";

export const Layout = () => {
    return (
        <div className="layout">
            <div className="content">
                <div className="container">
                    <AppNav />
                </div>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<HomeScene />} />
                        <Route path="/about" element={<AboutScene />}/>
                    </Routes>
                </div>
            </div>
            <footer className="footer">
                <div>Copyright &copy; {new Date().getFullYear()}</div>
            </footer>
        </div>
    );
};
