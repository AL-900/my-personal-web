import React from 'react';
import Title from '../../../Components/Title';

function ServicesIntro() {
    return (
        <div className="container Services__Intro">
            <div className="row">
                <Title
                    text="my services"
                    nextWordColor
                    className="Services__Intro__title "
                />
                <div className="col-md-6   Services__Intro__left ">
                    <h3 className="fw-bold text-center text-capitalize ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Facilis, sit?
                    </h3>
                </div>
                <div className="col-md-6 Services__Intro__right ">
                    <div className="  text-start">
                        <p className="fw-light ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas repudiandae fugiat eveniet mollitia
                            rerum ullam minus officia unde porro sed . Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Alias, quod.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesIntro;
