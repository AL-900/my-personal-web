/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import BlogMain from './blogsComponent/BlogMain';
import * as actions from '../../hooks/dataLayer/actions';
import useGlobalDataLayer from '../../hooks/dataLayer/useDataLayer';
import data from '../../data/data';
import { scrollToTop, paginate } from '../../others/myS';
import Loading from '../../Components/Loading';

function Blog() {
    const [followers, setFollowers] = useState([]);
    const [chunkBlog, setChunkBlog] = useState([]);
    const [page, setPage] = useState(0);
    const [{ blogData, blogLoading }, dispatch] = useGlobalDataLayer();

    /**
     *  fetching data from database
     */

    useEffect(() => {
        const fetchData = async () => {
            const response = await data;
            const getJson = await JSON.parse(response);
            const blogDataList = await getJson.post;
            console.log(getJson);

            dispatch({
                type: actions.BLOG__DATA,
                payload: blogDataList,
            });
            dispatch({
                type: actions.BLOG__LOADING,
                blog_loading: false,
            });
        };

        fetchData();
    }, [dispatch]);
    console.log(blogData);

    useEffect(() => {
        setFollowers(paginate(3, blogData));
    }, [blogData, blogLoading]);

    useEffect(() => {
        setChunkBlog(followers[page]);
    }, [page, followers]);

    const nextPage = () => {
        scrollToTop();
        setPage((oldpage) => {
            let nxt = oldpage + 1;

            if (nxt > followers.length - 1) {
                nxt = 0;
            }

            return nxt;
        });
    };
    const prevPage = () => {
        scrollToTop();

        setPage((oldpage) => {
            let prev = oldpage - 1;

            if (prev < 0) {
                prev = 0;
            }

            return prev;
        });
    };

    const handlePage = (index) => {
        scrollToTop();
        setPage(index);
    };

    if (blogLoading === true) {
        return <Loading />;
    }
    return (
        <div className="blog">
            <div className="container">
                {chunkBlog?.map((v, index) => (
                    <BlogMain {...v} key={Math.random()} />
                ))}
            </div>

            <div className="container">
                {!blogLoading && (
                    <div className="btns__paginetion">
                        <button
                            type="button"
                            className="text-capitalize prev__btn "
                            onClick={prevPage}
                        >
                            previous
                        </button>
                        <button
                            type="button"
                            className="text-capitalize next__btn"
                            onClick={nextPage}
                        >
                            next
                        </button>
                        {followers.map((_, index) => (
                            <button
                                type="button"
                                className={` num__btn ${
                                    index === page ? 'active__btn' : null
                                } `}
                                onClick={() => handlePage(index)}
                                key={Math.random()}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blog;
