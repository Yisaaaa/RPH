import React from "react";
import articles from "../data";
import { useParams } from "react-router-dom";
import Video from "./Video";
import ArticleCss from "../css/Article.css";
import css from "../css/index.css";

export default function Article() {
    const { id } = useParams();
    const articleId = parseInt(id);
    const article = articles.find((article) => article.id === articleId);

    console.log(article);
    if (!article) {
        return <h1>Blog article not found!</h1>;
    }

    const paragraphs = article.content.map((paragraph) => {
        return <p key={paragraph.id}>{paragraph.text}</p>;
    });

    return (
        <section className="article">
            <article className="article-container">
                <div className="heading">
                    <p className="subheading">{article.subHeading}</p>
                    <h2 className="heading--secondary">{article.title}</h2>
                </div>
                <Video videoUrl={article.videoUrl}></Video>

                <div className="content-text">{paragraphs}</div>
            </article>
        </section>
    );
}
