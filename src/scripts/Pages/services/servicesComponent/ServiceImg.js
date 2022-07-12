import React from 'react';

function ServiceImg({ img }) {
    return (
        <div id="Service__Img" className="text-start  ">
            <img src={img} className="img-fluid rounded " alt="" />
        </div>
    );
}

export default ServiceImg;
