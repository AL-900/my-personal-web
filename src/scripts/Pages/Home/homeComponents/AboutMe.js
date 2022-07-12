import React, { useState, useEffect } from 'react';
import InformationDetail from '../../../Components/InformationDetail';
import LinkButton from '../../../Components/LinkButton';
import Title from '../../../Components/Title';
import data from '../../../data/data';
import CountDown from './Countdown';

function AboutMe() {
    const [myinformation, setMyinformation] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await data;
            const convertJson = await JSON.parse(response);
            const myInformation = convertJson.myInfo;
            setMyinformation(myInformation);
        };
        fetchData();
    }, []);

    return (
        <section className="aboutMe">
            <Title text="about me" className="my-0" />
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="aboutMeInformation">
                            {myinformation.map((info) => (
                                <InformationDetail
                                    title={info?.title}
                                    info={info?.info}
                                    key={info?.id || Math.random()}
                                />
                            ))}
                            <LinkButton path="/contact" text="contact info" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <CountDown />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
