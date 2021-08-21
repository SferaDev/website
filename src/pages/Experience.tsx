import React from "react";
import styled from "styled-components";
import { PageProps } from ".";

export const Experience: React.FC<PageProps> = React.memo(props => {
    const { work, education } = props.resume.experience;

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <Title>
                        <span>Education</span>
                    </Title>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education.map(({ school, title, years, description }) => (
                                <div key={school}>
                                    <h3>{school}</h3>
                                    <p className="info">
                                        {title} <span>&bull;</span>
                                        <em className="date">{years}</em>
                                    </p>
                                    <p>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <Title>
                        <span>Work</span>
                    </Title>
                </div>

                <div className="nine columns main-col">
                    {work.map(({ company, title, years, description }) => (
                        <div key={company}>
                            <h3>{company}</h3>
                            <p className="info">
                                {title}
                                <span>&bull;</span> <em className="date">{years}</em>
                            </p>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

const Title = styled.h1`
    text-align: center;
`;
