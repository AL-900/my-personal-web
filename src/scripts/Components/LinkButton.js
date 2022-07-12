/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import React from 'react';

function LinkButton({ path = null, text, ...extra }) {
    if (path == null) {
        return (
            <div className="my-5">
                <button type="submit" className="linkButtonSubmit" {...extra}>
                    {text}{' '}
                </button>
            </div>
        );
    }

    return (
        <div className="my-5">
            <Link to={path} className="linkButton" {...extra}>
                {text}{' '}
            </Link>
        </div>
    );
}

export default LinkButton;
