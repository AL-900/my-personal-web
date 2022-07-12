import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../others/myS';

function FooterContent() {
    const foooterLinksRef = useRef(null);

    useEffect(() => {
        [...foooterLinksRef.current.children].forEach((v) => {
            v.addEventListener('click', scrollToTop);
        });
    }, []);

    return (
        <div className="footer__content  ">
            <div className="container">
                <div className="row text-light mt-4 pb-5   ">
                    <div className="col-xl-4  col-md-6  col-12  ps-3  mt-3 ">
                        <h5 className="fw-bold text-start text-capitalize">
                            hasan al mamun
                        </h5>
                        <hr className="text-secondary footer__hr" />
                        <p className="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati incidunt iusto laboriosam id,
                            necessitatibus ab esse rerum consequatur ad aperiam!
                        </p>
                    </div>
                    <div className="col-xl-4  col-md-6  col-12  ps-3 mt-3 ">
                        <h5 className="fw-bold text-start text-capitalize  text-light">
                            usefull links{' '}
                        </h5>
                        <hr className="text-secondary footer__hr" />

                        <div
                            className="m-0 p-0 footer__content__list "
                            ref={foooterLinksRef}
                        >
                            <Link
                                to="/"
                                className="nav-link text-capitalize fw-bold "
                            >
                                home
                            </Link>

                            <Link
                                to="/services"
                                className=" fw-bold  nav-link text-capitalize"
                            >
                                services
                            </Link>
                            <Link
                                to="/projects"
                                className="fw-bold nav-link text-capitalize"
                            >
                                projects
                            </Link>
                            <Link
                                to="/contact"
                                className="fw-bold nav-link text-capitalize"
                            >
                                contact
                            </Link>
                            <Link
                                to="/blog"
                                className="fw-bold nav-link text-capitalize"
                            >
                                blog
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4  col-md-6  col-12  text-light ps-3   mt-3 ">
                        <h5 className="fw-bold text-start text-capitalize  text-light">
                            contant{' '}
                        </h5>
                        <hr className="text-secondary footer__hr" />

                        <address>
                            ha.mamun.developer@gmail.com
                            <br />
                            Motijheel ,1000
                            <br />
                            Dhaka , Bangladesh
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContent;
