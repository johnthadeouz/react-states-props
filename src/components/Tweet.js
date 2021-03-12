import React from 'react'

const Tweet = (props) => (

    <div className="tweet-style">
        <h1>{props.name}</h1>
        <h2>{props.tweet}</h2>
    </div>
);

export default Tweet;