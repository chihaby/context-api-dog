import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>404 Page Not Found</h1>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default NoMatch;
