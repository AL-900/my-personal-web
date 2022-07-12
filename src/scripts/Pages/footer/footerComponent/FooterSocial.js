import React, { useEffect, useRef } from 'react';
import {
    //  FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    //  FaWhatsapp,
} from 'react-icons/fa';

function FooterSocial() {
    const icons = useRef(null);

    useEffect(() => {
        icons.current.childNodes.forEach((icon, indx) => {
            const colors = [
                'darkblue',
                '#0d6efd',
                '#49a6e9',
                '#198754',
                'yellow',
            ];

            icon.firstChild.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.transition = 'all .5s ease';
                e.currentTarget.style.fill = colors[indx];
            });
            icon.firstChild.addEventListener('mouseleave', (e) => {
                e.currentTarget.style.transition = 'all .5s ease';
                e.currentTarget.style.fill = '#fff';
            });
        });
    }, []);

    return (
        <div className="footer__social">
            <div className="container">
                <div className="row py-3  text-light">
                    <div className="col-lg-5 col-md-6 text-center footer__social__head">
                        <h3 className="lead fw-bold m-0 p-0 text-uppercase ">
                            Connect with me with social media
                        </h3>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <ul
                            className="social__icons justify-content-center "
                            ref={icons}
                        >
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaLinkedin />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSocial;
