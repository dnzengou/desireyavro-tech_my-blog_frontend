import React from 'react';
//const CommentsList = ({ comments }) => (<><hr></hr><h3><i>Comments:</i></h3>
const CommentsList = ({ comments }) => (
    <>
    <h3><i></i></h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;