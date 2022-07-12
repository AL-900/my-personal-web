/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../hooks/dataLayer/actions';
import useGlobalDataLayer from '../../hooks/dataLayer/useDataLayer';
import Loading from '../../Components/Loading';
import data from '../../data/data';
import { scrollToTop } from '../../others/myS';

function Portfolio() {
    return (
        <section>
            <Projects />
        </section>
    );
}

export default Portfolio;

function Projects() {
    const [{ projectData, projectLoading }, dispatch] = useGlobalDataLayer();

    useEffect(() => {
        const fetchData = async (url) => {
            const res = await url;
            const getJson = await JSON.parse(res);
            console.log(getJson);
            const projectDataList = await getJson.projects;

            dispatch({
                type: actions.PROJECT__DATA,
                payload: projectDataList,
            });

            dispatch({
                type: actions.PROJECT__LOADING,
                payload: false,
            });
        };
        fetchData(data);
        scrollToTop();
    }, [dispatch]);

    if (projectLoading) {
        return <Loading />;
    }

    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    {projectData.map((project) => (
                        <SingleProject {...project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SingleProject({ name, subTitle, img, id }) {
    const handleVisit = () => {
        window.open();
    };

    return (
        <div className="col-md-3 p-1  col-lg-4  ">
            <div className="single__project">
                <div className="card">
                    <Link to={`/projects/${name}`}>
                        <img
                            src={img}
                            className="card-img-top img-fluid"
                            alt="..."
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize fw-bold mb-2 mt-1 text-center  ">
                            {name}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted  text-center">
                            {subTitle}
                        </h6>

                        <div className="card__buttons mt-3 ">
                            <button
                                type="button"
                                className="btn btn-outline-success rounded-pill py-0 px-3 fw-bold text-capitalize  "
                                onClick={handleVisit}
                            >
                                visit
                            </button>
                            <Link
                                to={`/projects/${name}`}
                                className="btn btn-outline-secondary rounded-pill py-0 px-3 fw-bold  text-capitalize"
                            >
                                details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
