import React from "react";
import { PageProps } from "./App";

export const About: React.FC<PageProps> = React.memo(props => {
    const { image, bio, resumeUrl } = props.resume.overview;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={image} alt="Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns download">
                            <p>
                                <a href={resumeUrl} className="button">
                                    <i className="fa fa-download" />
                                    Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
