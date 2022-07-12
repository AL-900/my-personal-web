/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function Title({ text, nextWordColor, ...extra }) {
    const t = text.split(' ');

    return (
        <div className="title mb-5">
            {nextWordColor ? (
                <h1 {...extra}>
                    {t[0]} <span className="yellow">{t[1]} </span>
                </h1>
            ) : (
                <h1 {...extra}>
                    <span className="yellow">{t[0]} </span> {t[1]}
                </h1>
            )}
            <hr />
        </div>
    );
}

export default Title;
