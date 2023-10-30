import React from "react";
import BlogCss from "../css/Blog.css";
import articles from "../data";
import Card from "./Card";

export default function Blog() {
    const cards = articles.map((article) => {
        return <Card {...article} key={article.id} />;
    });

    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="blob-about">
                    <h2 className="blog-title heading--secondary">
                        My individual works
                    </h2>
                    <p className="blog-desc">
                        These are the individual works that we are tasked to do
                        by Mr. Villegas--our professor in Readings in the
                        Philippine History
                        <br />
                        The activities were made into blog articles for easy
                        reading though some are with a video. Enjoy!
                    </p>
                </div>
                <div className="divider"></div>
                <div className="cards">
                    <div>{cards}</div>
                </div>
            </div>
        </section>
    );
}
