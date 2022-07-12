import React, { useEffect } from 'react';
import loadingImg from '../../img/loading__img.gif';
import { scrollToTop } from '../others/myS';

function Loading() {
    useEffect(() => {
        window.onload = scrollToTop;
    }, []);

    return (
        <div className="loading">
            <img src={loadingImg} alt="" className="img-fluid" />
        </div>
    );
}

export default Loading;
