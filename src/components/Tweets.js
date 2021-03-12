import React from 'react';
import Tweet from './Tweet';

const Tweets = ({ hidden }) => {

    const tweets = [
        { name: 'Jonamon', tweet: 'oshtia shavalesh' },
        { name: 'Ezquiso', tweet: 'malditazea' },
        { name: 'Yunae', tweet: 'bienvenidos a mi casa!!!' }
    ];
    let classes = "tweets-container" + (hidden && " active");
    return (
        <section className={classes} >
            {
                tweets.map(tweet =>
                    <Tweet
                        name={tweet.name}
                        tweet={tweet.tweet}
                    />)
            }
        </section >
    );

};
export default Tweets;