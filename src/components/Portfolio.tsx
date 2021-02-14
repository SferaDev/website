import React from "react";
import { PageProps } from "./App";

export const Portfolio: React.FC<PageProps> = React.memo(props => {
    const { projects } = props.resume.portfolio;

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects.map(({ title, url, image, category }) => (
                            <div key={title} className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href={url} title={title}>
                                        <img alt={title} src={image} />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>{title}</h5>
                                                <p>{category}</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="fa fa-link" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
