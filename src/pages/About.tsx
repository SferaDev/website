import React from "react";
import styled from "styled-components";
import { PageProps } from ".";
import { Button } from "../components/Button";

export const About: React.FC<PageProps> = React.memo(props => {
    const { image, bio, resumeUrl } = props.resume.overview;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <ProfilePic src={image} alt="Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <Title>About Me</Title>

                    <Bio>{bio}</Bio>
                    <div className="row">
                        <div className="columns download">
                            <p>
                                <DownloadButton href={resumeUrl}>
                                    <i className="fa fa-download" />
                                    Download Resume
                                </DownloadButton>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

const ProfilePic = styled.img`
    position: relative;
    width: 240px;
    height: 220px;
    border-radius: 100%;
    right: 35px;

    @media only screen and (max-width: 900px) {
        width: 114px;
        height: 114px;
        margin-left: 12px;
    }

    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

const Title = styled.h2`
    font: 22px/30px "opensans-bold", sans-serif;
    color: #fff;
    margin-bottom: 12px;
`;

const Bio = styled.p`
    line-height: 30px;
    color: #eeeeee;
`;

const DownloadButton = styled(Button)`
    margin-top: 6px;
    background: #444;

    :hover {
        background: #fff;
        color: #2b2b2b;
    }

    i {
        margin-right: 15px;
        font-size: 20px;
    }

    @media only screen and (max-width: 767px) {
        width: 100%;
        text-align: center;
        padding: 15px 20px;
    }
`;
