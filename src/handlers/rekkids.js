import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Rekkids extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            releases: []
        }
    }

    componentDidMount() {
        fetch('/api/records')
            .then(res => { 
                if (res.ok) {
                    return res.json() ;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(res => this.setState({ releases: res.releases }));
    }

    render() {

         //<li>{`${release.basic_information.artists[0].name} - ${release.basic_information.title}`}</li>)}
        return (
            <div>
                {
                    this.state.releases.map(release => 
                        <img src={release.basic_information.thumb}>{`${release.basic_information.artists[0].name} - ${release.basic_information.title}`}</img>)
                }
            </div>
        )
    }
}

