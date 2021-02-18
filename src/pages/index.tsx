import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Resume } from "../models/Resume";
import { About } from "./About";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";

export const App: React.FC = React.memo(() => {
    const [resume, setResume] = useState<Resume>();

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(json => setResume(json));
    }, []);

    useEffect(() => {
        ReactGA.initialize("UA-140303290-1");
        ReactGA.pageview(window.location.pathname);
    }, []);

    if (!resume) return null;

    return (
        <div className="App">
            <Header resume={resume} />
            <About resume={resume} />
            <Experience resume={resume} />
            <Portfolio resume={resume} />
            <Footer resume={resume} />
        </div>
    );
});

export interface PageProps {
    resume: Resume;
}
