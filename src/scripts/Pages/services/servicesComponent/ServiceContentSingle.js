import React from 'react';
import LinkButton from '../../../Components/LinkButton';

function ServiceIntroSingle({ text, btnTitle, path }) {
    return (
        <div className="service__content__intro mb-3 ">
            <p className="lh-lg text-start text-light ">{text}</p>
            <LinkButton text={btnTitle} path={path} />
        </div>
    );
}

export default ServiceIntroSingle;
