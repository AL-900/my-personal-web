import React from 'react';

function FooterTop({ Icon, title, sub, url }) {
    return (
        <div className="col-xl-4  col-md-6  col-12   ps-3  footer__top  d-block d-lg-flex">
            <Icon className="icon" />
            <div className="footer__top__info ps-2 ">
                <a href={url} className="title text-light fw-bold  ">
                    {title}
                </a>
                <p className="p m-0">{sub}</p>
            </div>
        </div>
    );
}

export default FooterTop;
