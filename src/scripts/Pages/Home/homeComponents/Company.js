import React, { useState, useEffect } from 'react';
import Title from '../../../Components/Title';
import data from '../../../data/data';

function Company() {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await data;
            const getJson = await JSON.parse(response);
            const companyData = await getJson.company;

            setCompany(companyData);
        };

        fetchData();
    }, []);
    console.log(company);
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,0L48,10.7C96,21,192,43,288,85.3C384,128,480,192,576,224C672,256,768,256,864,224C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            <div id="company">
                <Title text="Trusted company" className="display-1" />
                <div className="container">
                    <div className="row  ">
                        {company.map((img) => (
                            <div className="col-md-4" key={Math.random()}>
                                <div className="company__logo shadow-lg mt-3">
                                    <img
                                        src={img}
                                        className="img-fluid d-block m-auto"
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;
