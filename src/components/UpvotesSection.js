import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div id="upvotes-section">
        </div>
    );
    //return (
    //    <div id="upvotes-section">
    //        <button onClick={() => upvoteArticle()}>Add Upvote</button>
    //        <p><i>This post has been upvoted <b>{upvotes}</b> times</i></p>
    //    </div>
    //);
}

export default UpvotesSection;