import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useGlobalDataLayer from '../../../hooks/dataLayer/useDataLayer';
import { scrollToTop } from '../../../others/myS';

function SingleProject() {
    const { projectId } = useParams();
    const [{ projectData }] = useGlobalDataLayer();

    useEffect(() => {
        scrollToTop();
    }, []);

    const myFilter = (bb) =>
        projectData.filter(
            (v) => v?.name === decodeURIComponent(projectId)
        )[0]?.[bb];

    return (
        <div className="project__detail">
            <div className="container">
                <div className="content">
                    <img src={myFilter('img')} alt="" className="img-fluid" />
                    <p className="mt-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit fugiat ipsum distinctio itaque tempora suscipit ea
                        beatae consequuntur. Similique debitis omnis pariatur
                        quam fugit expedita ullam, corrupti excepturi nam
                        aspernatur assumenda repellendus soluta molestias labore
                        id mollitia doloremque, facere, ad voluptates? Tempora
                        consequatur veniam enim assumenda? Doloribus sapiente
                        beatae accusantium impedit tenetur sunt id ab
                        consequuntur earum! Officia at animi cumque enim vero
                        ipsa quis voluptate exercitationem in odio, optio
                        aspernatur ea quasi molestias. Optio reiciendis
                        accusantium voluptatibus magnam iti eius natus eligendi
                        soluta delectus dolore aperiam mollitia illum recusandae
                        fugiat alias at molestiae sit a sequi. Consequuntur
                        veritatis beatae in tempore quisquam voluptatum quam
                        suscipit assumenda neque quasi nulla vitae nam delectus
                        eaque voluptas culpa facilis et eum iste expedita,
                        blanditiis doloribus sapiente soluta. Blanditiis dolore
                        laborum sunt, rerum et itaque sint rem voluptatum
                        aspernatur ullam soluta voluptatibus recusandae!
                        Consequuntur nulla, pariatur animi amet delectus alias
                        quam. Iste praesentium cum facilis, debitis ducimus quae
                        odio dignissimos dolor quas quasi ea sed quam asperiores
                        nihil, laudantium cupiditate in non facere repellat
                        laborum eum ex excepturi.
                    </p>

                    <Link
                        to="/projects"
                        className="btn btn-primary fw-bold text-capitalize"
                    >
                        back
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
