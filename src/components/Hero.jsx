import React from "react";
import heroImg from "../img/TheParisianLife_JuanLuna.jpg";
import HeroCss from "../css/Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="text-box">
                <h1 className="heading--primary">Hi! I'm Luis Ryan</h1>
                <p className="hero-text">
                    This is where I upload my individual projects and activites
                    in our subject Readings in the Philippine History
                </p>
                <a className="btn btn--hero" href="#blog">
                    Explore
                </a>
            </div>
            <div className="img-box">
                <img
                    className="hero-img"
                    src={heroImg}
                    alt="The Parisian Life painting by Juan Luna"
                />
            </div>
        </section>
    );
}
