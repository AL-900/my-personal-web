import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import LinkButton from '../../../Components/LinkButton';
import { scrollToTop, truncate } from '../../../others/myS';

function BlogMain({ postImg, id, message }) {
    const [showPost, setShowPost] = useState(false);
    const handleReadMore = () => {
        scrollToTop();
        setShowPost(!showPost);
    };

    return (
        <div className="card mb-4 mt-2 " key={id}>
            <img className="card-img-top img-fluid" src={postImg} alt="post" />
            <div className="card-body">
                <p className="card-text">
                    {!showPost ? truncate(message, 100) : message}
                </p>
                <LinkButton
                    path={`/blog/${id}`}
                    onClick={handleReadMore}
                    text="read more"
                />
            </div>
        </div>
    );
}

export default BlogMain;
