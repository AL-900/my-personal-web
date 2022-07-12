import React from 'react';
import { Code } from '@material-ui/icons';
import ContentHeader from './servicesComponent/ContentHeader';
import ServiceContent from './servicesComponent/ServiceContent';
import ServiceImg from './servicesComponent/ServiceImg';
import ServiceContentSingle from './servicesComponent/ServiceContentSingle';
import img from '../../../img/banner-bg.jpg';

const detail = {
    web: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor autem laudantium ab
	 possimus eveniet aliquid nisi obcaecati, assumenda beatae, provident, facilis suscipit voluptas!
	 Voluptatem praesentium rem delectus, voluptatum recusandae laborum modi molestiae sint, expedita eligendi
	  suscipit at assumenda quos voluptate.`,
};

function Services() {
    return (
        <div id="services">
            <ServiceContent />
            <div className="service__content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1 ">
                            <div className="service__content">
                                <ContentHeader
                                    Icon={Code}
                                    title="web development"
                                />
                                <ServiceContentSingle
                                    btnTitle="completed projects"
                                    text={detail.web}
                                    path="/projects"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2  ">
                            <ServiceImg img={img} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-2 ">
                            <div className="service__content">
                                <ContentHeader
                                    Icon={Code}
                                    title="cloud hosting"
                                />
                                <ServiceContentSingle
                                    btnTitle="learn more"
                                    text={detail.web}
                                    path="/projects"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-1 text-start ">
                            <ServiceImg img={img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
