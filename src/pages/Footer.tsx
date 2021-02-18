import React from "react";
import { PageProps } from ".";

export const Footer: React.FC<PageProps> = React.memo(props => {
    const { social } = props.resume.overview;

    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {social.map(({ name, url, className }) => (
                            <li key={name}>
                                <a href={url}>
                                    <i className={className} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; {`Copyright ${new Date().getFullYear()} Alexis Rico`}</li>
                    </ul>
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
    );
});
