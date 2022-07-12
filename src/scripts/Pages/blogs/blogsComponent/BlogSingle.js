import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../../data/data';

import { scrollToTop } from '../../../others/myS';

function BlogSingle() {
    const { id } = useParams();
    const i = Number(id);
    const [mydata, setMyData] = useState([]);
    const handleBack = () => {
        scrollToTop();
    };

    useEffect(() => {
        const f = async () => {
            const res = await data;
            const getJson = await JSON.parse(res);
            const blog = await getJson.post;
            setMyData(blog);
        };
        f();
    }, []);

    return (
        <div className="blog__single  ">
            <div className="container text-center">
                <div className="mt-5">
                    <img
                        src={mydata.filter((v) => v.id === i)[0]?.postImg}
                        className="img-fluid img-thumbnail shadow-lg  "
                        alt=""
                    />
                </div>
                <div className="content mt-5 ">
                    <p className="text-start">
                        {mydata.filter((v) => v.id === i)[0]?.message}
                    </p>
                </div>
                <Link
                    to="/blog"
                    className={`btn btn-primary px-3 mt-5 mb-3   fw-bold  `}
                    onClick={handleBack}
                >
                    Back
                </Link>
            </div>
        </div>
    );
}

export default BlogSingle;
