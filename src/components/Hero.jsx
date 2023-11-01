import React from "react";
// import heroImg from "../img/TheParisianLife_JuanLuna.jpg";
import heroImg from "../img/Hero.png";
import "../css/Hero.css";
import "../css/index.css";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero">
                <div className="text-box">
                    <h1 className="heading--primary">Hello, I'm Luis Ryan!</h1>
                    <p className="hero-text">
                        Welcome to my blog, where I share a world of history.
                        Join me on a journey through the pages of our subject,
                        Readings in Philippine History, as I explore and
                        showcase my individual projects and activities.
                    </p>
                    <div className="btn-container">
                        <a className="btn btn--hero-left" href="#blog">
                            Explore ↓
                        </a>
                        <a
                            className="btn btn--hero-right"
                            href="https://joseneilsilaganjr.my.canva.site/group-website"
                            target="_blank"
                        >
                            My group
                        </a>
                    </div>
                </div>
                <div className="img-box">
                    <img
                        className="hero-img"
                        src={heroImg}
                        alt="The Parisian Life painting by Juan Luna"
                    />
                </div>
            </div>
        </section>
    );
}
