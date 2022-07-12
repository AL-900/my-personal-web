import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import LinkButton from '../../../Components/LinkButton';
import { img } from '../../../data/imgSrc';

function Banner() {
    const expert = useRef(null);

    useEffect(() => {
        const experienceAt = [
            'React.js',
            'JavaScript',
            'BootStrap',
            'React Router',
            'Context API',
            'Res. design',
            'REDUX',
            'Webpack',
            'SCSS',
            'CSS',
            'HTML5',
        ];

        init(expert.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            typeSpeed: 200,
            strings: experienceAt,
        });
    }, []);

    return (
        <div className="homeBanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-2">
                        <div className="homeBannerLogo">
                            <img
                                src={img.yourici}
                                alt="main bannaer logo"
                                className="homeBannerLogoImg"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <div className="homeBannerIntro">
                            <h1>
                                hey there ! I'm <br />
                                <span className="yellow">Hasan Al Mamun</span>
                            </h1>
                            <h3>i'm a frontend developer</h3>
                            <h4>
                                expert at{' '}
                                <span ref={expert} className="yellow" />
                            </h4>
                            <p>
                                I love to work and love chellenges because
                                chellange will make me better developer . if you
                                like you can work with me or maybe we can be a
                                great team . contact with me . I'll waiting for
                                you .
                            </p>
                            <LinkButton path="/chat" text="connent with me" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
