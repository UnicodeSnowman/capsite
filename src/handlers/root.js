import React from 'react';
var { Link, RouteHandler } = require('react-router');

class Links extends React.Component {
    render() {
        return (
            <section>
                <p>
                    <a href="http://github.com/unicodesnowman">Bloggin</a>
                    {/* do you even blog bro? */}
                </p>
                <p>
                    <a href="http://github.com/unicodesnowman">Code</a>
                    {/* 
                        this should probably link to page with description of indivudal projects? and then a full link to github
                       dotfiles, vimfiles, rust/matasano, other? I need to come up with a cool proejct/utility
                    */}
                </p>
                <p>
                    <a href="http://www.discogs.com/user/caplingerc/collection">Rekkids</a>
                    {/* display random record cover from discogs collection? also link to full collection */}
                    {/* maybe also a generator to pick an album from my collection at random */}
                    {/* description of stereo gear/setup... maybe guitar world-style gear diagram? */}
                </p>
                <p>
                    <Link to="elsewhere">Music</Link>
                    {/* Flag Day ? */}
                </p>
                <p>
                    <Link to="elsewhere">Misc. Projects</Link>
                    {/* guitar pedals */}
                </p>
            </section>
        )
    }
};

export default class Root extends React.Component {
    render() {
        return  (
            <article>
                <h1>Christopher S. Caplinger</h1>
                <subtitle>
                    <p>
                        Software Engineer, Doer of Things
                        <span className="sidenote-number" />
                        <span className="sidenote">most things, really
                            { /* 
                                <Link to="thingGenerator">most things, really</Link>
                                link to page that spits out a noun/name of a thing I like to do 
                               pull in things from various sources online?
                            */ }
                        </span>
                    </p>
                </subtitle>
                <section>
                    <a href="https://github.com/UnicodeSnowman" className="hover-image"><img src="img/github.png" alt="github.com/UnicodeSnowman" /></a>
                </section>
                {/*
                    <Links />
                */}
                <RouteHandler />
                {/*
                <hr />
                <footer>
                    <section>
                        <pre className="code">on that Tufte CSS and isomorphic react jazz</pre>
                    </section>
                </footer>
                */}
            </article>
        )
    }
}
