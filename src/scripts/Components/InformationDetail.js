import React from 'react';

function InformationDetail({ title, info }) {
    return (
        <div className="informationDetail my-3">
            <h5 className="informationDetailTitle m-0">{title} :</h5>
            <h5 className="informationDetailInfo m-0 ms-3">{info}</h5>
        </div>
    );
}

export default InformationDetail;
