import React from "react";
import "../css/Video.css";

export default function Video(props) {
    return (
        <iframe
            className="video"
            src={props.videoUrl}
            title="Why I would like to see Intramuros restored."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
}
