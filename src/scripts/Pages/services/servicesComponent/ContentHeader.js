import React from 'react';

function ContentHeader({ Icon, title }) {
    return (
        <div id="content__header">
            <div className={`icon  d-block mb-1 `}>
                <Icon />
            </div>
            <h3 className="content__header__title mt-2 text-capitalize">
                {title}
            </h3>
        </div>
    );
}

export default ContentHeader;
